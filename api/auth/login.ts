import type { VercelRequest, VercelResponse } from '@vercel/node';
import db from '../utils/db';
import { randomUUID } from 'crypto';

async function post(
    request: VercelRequest,
    response: VercelResponse
): Promise<VercelResponse> {
    const tempBody = request.body;
    let body: { username: string; password: string };
    if (!tempBody)
        return response.status(400).json({
            error: true,
            message: 'No body supplied',
            data: [],
        });
    try {
        body = JSON.parse(tempBody);
        if (!body.password || !body.username)
            return response.status(400).json({
                error: true,
                message: 'Malformed request',
                data: [],
            });
    } catch (err) {
        return response.status(400).json({
            error: true,
            message: 'Invalid body',
            data: [],
        });
    }

    const userinfo = await db.auth.findFirst({
        where: { email: body.username.toLowerCase() },
        select: {
            email: true,
            password: true,
            first_name: true,
            last_name: true,
        },
    });
    if (!userinfo?.email) {
        return response.status(403).json({
            error: true,
            message: 'User does not exist.',
            data: [],
        });
    }

    if (userinfo.password !== body.password)
        return response.status(403).json({
            error: true,
            message: 'Invalid password',
            data: [],
        });
    else {
        const token = await db.tokens.create({
            data: {
                uuid: randomUUID(),
                email: userinfo?.email,
            },
            select: { uuid: true },
        });

        return response.status(201).json({
            error: true,
            message: '',
            data: { token },
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
        case 'post':
            post(request, response);
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
