import { prisma } from '../db/prisma'; // update with correct path

async function clearDb() {
  await prisma.category.deleteMany();
  // add more tables if needed

  console.log('🧹 Database cleared.');
}

clearDb().catch((e) => {
  console.error(e);
  process.exit(1);
});
