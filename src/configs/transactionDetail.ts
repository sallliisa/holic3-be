export default {
    relation: {
        menu: {
            select: {
                name: true,
                unit_cost: true,
                img_photo: true
            }
        },
    },
    list: {
        filterable: ['transaction_id']
    }
}