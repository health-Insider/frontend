import { PrismaClient } from '@prisma/client/edge';

const db: PrismaClient = new PrismaClient({
	datasources: {
		db: {
			url: process.env.DATABASE_URL
		}
	},
	log: process.env.IS_PROD ? ['error'] : ['error', 'info', 'query', 'warn']
});

export default db;