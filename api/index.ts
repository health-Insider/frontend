import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async (
    request: VercelRequest,
    response: VercelResponse
): Promise<VercelResponse> => {
    return response.status(404).json({
        error: true,
        message: `This endpoint does not allow "${request.method}" requests.`,
        data: [],
    });
};
