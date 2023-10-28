export default async (request, response) => {
    // console.log(process.env.DATABASE_URL)
    return response.status(404).json({
        error: true,
        message: `This endpoint does not allow "${request.method}" requests.`,
        data: [],
    });
};
