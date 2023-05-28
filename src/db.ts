import { PrismaClient } from "@prisma/client";

//Permet de ne pas créer plein de clients en mode dev avec le hotreload de next.js

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma = 
    globalForPrisma.prisma ??
    new PrismaClient({
        log: ['query'],
    })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma