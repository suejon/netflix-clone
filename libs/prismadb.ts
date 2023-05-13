import { PrismaClient } from '@prisma/client';

// global files are not affected by hot reloading
// this will prevent hot-reload from creating too many clients in local development
const client = global.prismadb || new PrismaClient()
if (process.env.NODE_ENV === "production") global.prismadb = client

export default client;