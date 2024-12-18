// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require('@prisma/client');

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
    const existingColor = await prisma.color.findUnique({
      where: { name: color.name },
    });

    if (!existingColor) {
      await prisma.color.create({
        data: { name: color.name, hex_value: color.hex },
      });
      console.log(`Added new color: ${color.name}`);
    } else {
      console.log(`Color ${color.name} already exists.`);
    }
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
