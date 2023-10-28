/* eslint-disable no-undef */
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL,
        },
    },
    log: process.env.IS_PROD ? ['error'] : ['error', 'info', 'query', 'warn'],
});

export default db;
