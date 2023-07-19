'use strict';

/**
 * payment-callback controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::payment-callback.payment-callback', ({strapi})=>({
    async create(ctx) {
        let request = ctx.request.body

        // let order = await strapi.service('api::order.order').findOne(request.order_id)

        let params = {}

        if (request.transaction_status == "settlement") {
            params = {'data': { 'orderStatus': 'purchased' }}
        } else {
            // params = {'data': { 'orderStatus': 'cancel' }}
        }

        let UpdatedOrder = await strapi.service('api::order.order').update(request.order_id, params)
        ctx.request.body = { 
            "data" : { 
                "history" : ctx.request.body
            } 
        }
        await super.create(ctx);

        return {'data': UpdatedOrder}
    }
}));
