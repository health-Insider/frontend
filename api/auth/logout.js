// import type { VercelRequest, VercelResponse } from '@vercel/node';
import db from '../utils/db.js';

export default async function post(request, response) {
    const tempBody = request.body;
    let body;
    if (!tempBody)
        return response.status(400).json({
            error: true,
            message: 'No body supplied',
            data: [],
        });
    try {
        body = JSON.parse(tempBody);
        if (!body.token)
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

    const tokenInfo = await db.tokens.findFirst({
        where: { uuid: body.token },
        select: { email: true },
    });

    if (!tokenInfo?.email)
        return response.status(404).json({
            error: true,
            message: 'Invalid token',
            data: [],
        });
    else {
        try {
            await db.tokens.delete({
                where: { uuid: body.token },
            });
        } catch (err) {
            return response.status(200).json({
                error: false,
                message: '',
                data: 'SUCCESSFUL',
            });
        }
    }
    // const userinfo = await db.auth.findFirst({
    //     where: { email: body.username.toLowerCase() },
    //     select: {
    //         email: true,
    //         password: true,
    //         first_name: true,
    //         last_name: true,
    //     },
    // });
    // if (!userinfo?.email) {
    //     return response.status(403).json({
    //         error: true,
    //         message: 'User does not exist.',
    //         data: [],
    //     });
    // }

    // if (userinfo.password !== body.password)
    //     return response.status(403).json({
    //         error: true,
    //         message: 'Invalid password',
    //         data: [],
    //     });
    // else {
    //     const token = await db.tokens.create({
    //         data: {
    //             uuid: randomUUID(),
    //             email: userinfo?.email,
    //         },
    //         select: { uuid: true },
    //     });

    //     return response.status(201).json({
    //         error: true,
    //         message: '',
    //         data: { token },
    //     });
    // }
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
