const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log("Prisma se conectó correctamente");
  } catch (error) {
    console.error("Error al conectar Prisma:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();