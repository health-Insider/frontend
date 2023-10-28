import db from '../utils/db.js';
import checkAuth from '../utils/checkAuth.js';

export default async function get(request, response) {
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
            data: await db.dailystats.findMany({
                where: { email },
                select: {
                    day: true,
                    steps: true,
                    time_taken: true,
                },
            }),
        });
    }
    return response.status(500).json({
        error: true,
        message: 'An error occured.',
    });
}

// export default async (
//     request,
//     response
// ) => {
//     switch (request.method?.toLowerCase()) {
//         case 'get':
//             get(request, response);
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
