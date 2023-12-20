export default {
  relation: {
    user: {
      select: {
        name: true
      }
    },
    customer: {
      select: {
        name: true
      }
    },
    table: {
      select: {
        code: true
      }
    },
    promo: {
      select: {
        name: true
      }
    }
  },
  list: {
    filterable: ["status"]
  }
}