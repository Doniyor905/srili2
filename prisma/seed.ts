import { AboutGallery, product, personal } from './constants';
import { prisma } from './prisma-client';
async function up() {
  await prisma.product.createMany({
    data: product,
  });

  await prisma.aboutGallery.createMany({
    data: AboutGallery,
  });

  await prisma.about.createMany({
    data: personal,
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "AboutGallery" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "About" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect;
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
