import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.role.createMany({
      data: [
        {name: "E1", active: true},
        {name: "E2", active: true},
        {name: "E3", active: true},
        {name: "E4", active: true},
      ],
    });
  } catch {}

  await prisma.user.create({
    data: {
      role_id: 4,
      name: "Muslik van Mook",
      username: "mvm",
      password: "gamer42069",
      img_photo: "",
      active: true
    }
  })
}

main().then(async () => {
  await prisma.$disconnect();
});
