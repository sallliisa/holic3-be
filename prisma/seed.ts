import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.transactionDetail.deleteMany({})
  await prisma.transaction.deleteMany({})
  await prisma.userActivity.deleteMany({})
  await prisma.user.deleteMany({})
  await prisma.role.deleteMany({})

  await prisma.role.createMany({
    data: [
      {name: "E1", active: true},
      {name: "E2", active: true},
      {name: "E3", active: true},
      {name: "E4", active: true},
    ],
  });

  await prisma.user.createMany({
    data: [
      {
        role_id: 4,
        code: "WT1202312X1",
        name: "Muslik van Mook",
        username: "mvm",
        password: "gamer42069",
        img_photo: "",
      },
      {
        role_id: 4,
        code: "WT1202312X2",
        name: "Mas Zenobia",
        username: "jeno",
        password: "123456",
        img_photo: "",
      },
    ]
  })

  await prisma.customer.deleteMany({})

  await prisma.customer.createMany({
    data: [
      {
        name: 'Mas Zenobia',
        point: 0
      },
      {
        name: 'Mba Muslik',
        point: 0
      }
    ]
  })

  await prisma.warung.deleteMany({})

  await prisma.warung.createMany({
    data: [
      {name: 'Holic 1', code: 'WT1'},
      {name: 'Holic 2', code: 'WT2'},
      {name: 'Holic 3', code: 'WT3'}
    ]
  })

  await prisma.table.deleteMany({})

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

  await prisma.category.deleteMany({})

  await prisma.category.createMany({
    data: [
      {name: 'Nasi'},
      {name: 'Mie'},
      {name: 'Es'},
      {name: 'Hangat'},
    ]
  })

  await prisma.menu.deleteMany({})

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

  await prisma.promo.deleteMany({})

  await prisma.promo.createMany({
    data: [
      {name: 'First Timer', description: 'Promo untuk pelanggan pertama', point_cost: 0}
    ]
  })

  await prisma.transaction.deleteMany({})

  await prisma.transaction.createMany({
    data: [
      {
        code: "WT1202312171",
        user_id: 1,
        customer_id: 1,
        table_id: 1,
        promo_id: 1,
        shift: 1,
        status: 'TAKEN',
        total_discount: 3000,
        subtotal: 19000,
        total: 16000,
        payment_method: 'CASH'
      },
      {
        code: "WT1202312172",
        user_id: 2,
        customer_id: 2,
        table_id: 1,
        promo_id: 1,
        shift: 1,
        status: 'ON_COOK',
        total_discount: 3000,
        subtotal: 18000,
        total: 15000,
        payment_method: 'CASH'
      },
      {
        code: "WT1202312173",
        user_id: 2,
        customer_id: 2,
        table_id: 1,
        promo_id: 1,
        shift: 1,
        status: 'SERVED',
        total_discount: 3000,
        subtotal: 18000,
        total: 15000,
        payment_method: 'CASH'
      },
      {
        code: "WT1202312174",
        user_id: 2,
        customer_id: 2,
        table_id: 1,
        promo_id: 1,
        shift: 1,
        status: 'COMPLETED',
        total_discount: 3000,
        subtotal: 18000,
        total: 15000,
        payment_method: 'CASH'
      }
    ]
  })

  await prisma.transactionDetail.deleteMany({})

  await prisma.transactionDetail.createMany({
    data: [
      // 1
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
      // 2
      {
        transaction_id: 2,
        menu_id: 2,
        amount: 1,
      },
      {
        transaction_id: 2,
        menu_id: 5,
        amount: 1,
      },
      // 3
      {
        transaction_id: 3,
        menu_id: 2,
        amount: 1,
      },
      {
        transaction_id: 3,
        menu_id: 5,
        amount: 1,
      },
      // 4
      {
        transaction_id: 4,
        menu_id: 2,
        amount: 1,
      },
      {
        transaction_id: 4,
        menu_id: 5,
        amount: 1,
      },
    ]
  })

  await prisma.userActivity.deleteMany({})

  await prisma.userActivity.createMany({
    data: [
      {
        user_id: 1,
        activity_type: 'FINISHED_ORDER'
      }
    ]
  })
}

main().then(async () => {
  await prisma.$disconnect();
});
