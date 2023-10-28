// import db from './db';

export default async function checkAuth(token, db) {
    const data = await db.tokens.findFirst({
        where: { uuid: token },
        select: { email: true },
    });
    return {
        valid: !!data,
        email: data ? data.email : '',
    };
}
