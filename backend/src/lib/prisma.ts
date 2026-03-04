import { PrismaClient } from "../../prisma/generated/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import "dotenv/config";

// This helps TypeScript know about our global variable
declare global {
  var prisma: PrismaClient | undefined;
}

const DATABASE_URL = process.env.DATABASE_URL!;
const adapter = new PrismaMariaDb(DATABASE_URL);

// Use an existing global instance if it exists (for hot-reloading)
// otherwise, create a new one.
export const prisma = global.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
