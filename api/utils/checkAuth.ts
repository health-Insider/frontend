import type { PrismaClient } from '@prisma/client';
// import db from './db';

export default async function checkAuth(
    token: string,
    db: PrismaClient
): Promise<{ valid: boolean; email: string }> {
    try {
        const data = await db.tokens.findFirstOrThrow({
            where: { uuid: token },
            select: { email: true },
        });
        return {
            valid: true,
            email: data.email ?? 'This will always exist do not worry kekw',
        };
    } catch (err) {
        return { valid: false, email: '' };
    }
}
