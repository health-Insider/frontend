import type { VercelRequest, VercelResponse } from '@vercel/node';

import db from '../utils/db';
import checkAuth from '../utils/checkAuth';

async function get(
    request: VercelRequest,
    response: VercelResponse
): Promise<VercelResponse> {
    const token = request.headers.authorization;
    if (!token)
        return response.status(403).json({
            error: true,
            message: 'No token in auth header',
            data: '',
        });
    const { valid: isAuth, email } = await checkAuth(token, db);

    if (!isAuth)
        return response.status(403).json({
            error: true,
            message: 'Invalid token',
            data: '',
        });
    else {
        return response.status(200).json({
            error: false,
            message: '',
            data: await db.monthlystats.findMany({
                where: { email },
                select: {
                    age: true,
                    gender: true,
                    height: true,
                    month: true,
                    weight: true,
                },
            }),
        });
    }
    return response.status(500).json({
        error: true,
        message: 'An error occured.',
    });
}

export default async (
    request: VercelRequest,
    response: VercelResponse
): Promise<VercelResponse> => {
    switch (request.method?.toLowerCase()) {
        case 'get':
            get(request, response);
            break;
        default:
            return response.status(405).json({
                error: true,
                message: `This endpoint does not allow "${request.method}" requests.`,
                data: [],
            });
    }
    return response
        .status(500)
        .json({ error: true, message: 'An error occured.' });
};
