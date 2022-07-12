const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log(
    await prisma.activity.findmany(),
    prisma.place.findmany(),
    prisma.number.findmany()
  );
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

module.exports = prisma;
