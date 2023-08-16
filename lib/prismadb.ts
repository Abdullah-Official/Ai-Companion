
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();

if (typeof window === "undefined") {
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;
}

export default prismadb;


