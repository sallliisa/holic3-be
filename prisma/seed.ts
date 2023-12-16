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

  try {
    await prisma.user.createMany({
      data: [
        {
          role_id: 4,
          name: "Muslik van Mook",
          username: "mvm",
          password: "gamer42069",
          img_photo: "",
        }
      ]
    })
  } catch {}

  try {
    await prisma.customer.createMany({
      data: [
        {
          name: 'Mas Zenobia',
          point: 0
        }
      ]
    })
  } catch {}

  try {
    await prisma.warung.createMany({
      data: [
        {name: 'Holic 1'},
        {name: 'Holic 2'},
        {name: 'Holic 3'}
      ]
    })
  } catch {}

  try {
    await prisma.table.createMany({
      data: [
        // Holic 1
        {warung_id: 1, code: "A1"},
        {warung_id: 1, code: "A2"},
        {warung_id: 1, code: "A3"},
        {warung_id: 1, code: "B1"},
        {warung_id: 1, code: "B2"},
        {warung_id: 1, code: "B3"},
        // Holic 2
        {warung_id: 2, code: "A1"},
        {warung_id: 2, code: "A2"},
        {warung_id: 2, code: "A3"},
        {warung_id: 2, code: "B1"},
        {warung_id: 2, code: "B2"},
        {warung_id: 2, code: "B3"},
        // Holic 3
        {warung_id: 3, code: "A1"},
        {warung_id: 3, code: "A2"},
        {warung_id: 3, code: "A3"},
        {warung_id: 3, code: "B1"},
        {warung_id: 3, code: "B2"},
        {warung_id: 3, code: "B3"},
      ]
    })
  } catch {}

  try {
    await prisma.category.createMany({
      data: [
        {name: 'Nasi'},
        {name: 'Mie'},
        {name: 'Es'},
        {name: 'Hangat'},
      ]
    })
  } catch {}

  try {
    await prisma.menu.createMany({
      data: [
        // Nasi
        {name: 'Orak-Arik Telor', category_id: 1, unit_cost: 9000},
        {name: 'Telor Gongso', category_id: 1, unit_cost: 11000},
        // Mie
        {name: 'Mie Dok-Dok', category_id: 2, unit_cost: 13000},
        {name: 'Mie Tek-Tek', category_id: 2, unit_cost: 13000},
        // Es
        {name: 'Soda Gembira', category_id: 3, unit_cost: 7000},
        {name: 'Air Es', category_id: 3, unit_cost: 1000},
        {name: 'Es Teh Manis', category_id: 3, unit_cost: 3000},
        {name: 'Es Teh Tawar', category_id: 3, unit_cost: 2000},
        // Hangat
        {name: 'Air Hangat', category_id: 4, unit_cost: 7000},
        {name: 'Teh Hangat', category_id: 4, unit_cost: 2500},
        {name: 'Teh Tawar', category_id: 4, unit_cost: 1500},
      ]
    })
  } catch {}

  try {
    await prisma.promo.createMany({
      data: [
        {name: 'First Timer', description: 'Promo untuk pelanggan pertama', point_cost: 0}
      ]
    })
  } catch {}

  try {
    await prisma.transaction.createMany({
      data: [
        {
          user_id: 1,
          customer_id: 1,
          table_id: 1,
          promo_id: 1,
          shift: 1,
          status: 'COMPLETED',
          total_discount: 3000,
          total: 19000,
          payment_method: 'CASH'
        }
      ]
    })
  } catch {}

  try {
    await prisma.transactionDetail.createMany({
      data: [
        {
          transaction_id: 1,
          menu_id: 3,
          amount: 1,
        },
        {
          transaction_id: 1,
          menu_id: 7,
          amount: 2,
        },
      ]
    })
  } catch {}

  try {
    await prisma.userActivity.createMany({
      data: [
        {
          user_id: 1,
          activity_type: 'FINISHED_ORDER'
        }
      ]
    })
  } catch {}
}

main().then(async () => {
  await prisma.$disconnect();
});
