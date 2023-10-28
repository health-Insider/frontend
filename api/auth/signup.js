/* eslint-disable @typescript-eslint/no-unused-vars */
import db from '../utils/db.js';
import { randomUUID } from 'crypto';

export default async function post(request, response) {
    const tempBody = request.body;
    // let body;
    if (!tempBody)
        return response.status(400).json({
            error: true,
            message: 'No body supplied',
            data: [],
        });
    try {
        const temp = JSON.parse(tempBody);
        if (
            !temp.password ||
            !temp.username ||
            !temp.firstName ||
            !temp.lastName
        )
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
    const body = JSON.parse(tempBody);
    const userinfo = await db.auth.create({
        data: {
            email: body.username.toLowerCase(),
            password: body.password,
            first_name: body.firstName,
            last_name: body.lastName,
            age: body.age,
        },
    });
    return response.status(201).json({
        error: false,
        message: '',
        data: {
            token: await db.tokens.create({
                data: { uuid: randomUUID(), email: body.email },
            }),
        },
    });
    return response.status(500).json({
        error: true,
        message: 'An error occured.',
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
