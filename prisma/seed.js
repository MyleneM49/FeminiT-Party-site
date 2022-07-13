const db = require("../db");

async function seed() {
  await db.thing.deleteMany();
  await db.thing.create({ data: { name: "something" } });
}

seed();

module.exports = seed;

// const { PrismaClient } = require('@prisma/client');

// const prisma = new PrismaClient();

// async function main() {
//   await prisma.article.create({
//     data: { title: 'article1', content: 'content1' },
//   });
// }

// main()
//   .catch((e) => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
