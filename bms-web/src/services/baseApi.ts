import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // To be adjusted based on actual backend URL
    endpoints: (builder) => ({
        // Endpoints will be added here
    }),
});
