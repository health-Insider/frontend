/* eslint-disable @typescript-eslint/no-unused-vars */
import checkAuth from '../utils/checkAuth.js';
import db from '../utils/db.js';

export default async function get(request, response) {
    const token = request.headers?.authorization || undefined;
    if (!token)
        return response.status(403).json({
            valid: false,
        });
    const { valid } = await checkAuth(token, db);
    return response.status(200).json({
        valid,
    });
}

// export default async (request, response) => {
//     switch (request.method?.toLowerCase()) {
//         case 'post':
//             await post(request, response);
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
