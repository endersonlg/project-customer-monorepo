import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const rainbowColors = [
    { name: 'Red', hex: '#FF0000' },
    { name: 'Orange', hex: '#FFA500' },
    { name: 'Yellow', hex: '#FFFF00' },
    { name: 'Green', hex: '#008000' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Indigo', hex: '#4B0082' },
    { name: 'Violet', hex: '#EE82EE' },
  ];

  for (const color of rainbowColors) {
    await prisma.color.upsert({
      where: { name: color.name },
      update: { hex_value: color.hex },
      create: { name: color.name, hex_value: color.hex },
    });
  }

  console.log('Colors seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
