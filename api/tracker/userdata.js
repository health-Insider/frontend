import db from '../utils/db.js';
import checkAuth from '../utils/checkAuth.js';
// import { VercelRequest } from '@vercel/node';

export default async function get(request, response) {
    const token = request.headers?.authorization || undefined;
    const { valid, email } = await checkAuth(token, db);
    if (!valid) {
        return response.status(403).json({
            error: true,
            message: 'Invalid token',
            data: '',
        });
    } else {
        const data = await db.auth.findMany({
            where: { email },
            select: {
                first_name: true,
                last_name: true,
            },
        });
        return response.status(200).json({
            error: false,
            message: '',
            data,
        });
    }
    return response.status(500).json({
        error: true,
        message: 'An error occured.',
        data: '',
    });
}

// export default async (request, response) => {
//     switch (request.method?.toLowerCase()) {
//         case 'get':
//             await get(request, response);
//             break;
//         default:
//             return response.status(405).json({
//                 error: true,
//                 message: `This endpoint does not allow "${request.method}" requests.`,
//                 data: [],
//             });
//     }
//     return response
//         .status(500)
//         .json({ error: true, message: 'An error occured.' });
// };
