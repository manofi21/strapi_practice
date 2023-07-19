'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async create(ctx) {
        const midtransClient = require('midtrans-client');
        let serverKey ='SB-Mid-server-af9DO2_3cuLtL2hQETv8YhIh';
        let clienKey = 'SB-Mid-client-hBWyu02RhqhALTcA';
        const result = await super.create(ctx);
        
        // Function jika menggunakan mitrans Snap
        let response = await midtransSnapFunction(serverKey, clienKey, midtransClient, result);

        // Function jika menggunakan mitrans Core
        // let response = midtransCoreFunction(serverKey, clienKey, midtransClient, result);
    
        return response;
    }
}));

// Function untuk memanggil result menggunakan midtrans Snap
async function midtransSnapFunction(serverKey, clienKey, midtransClient, result) {

    // Create Snap API instance
    let snap = new midtransClient.Snap({
            isProduction : false,
            serverKey : serverKey,
            clientKey : clienKey
        });
    
    let parameter = {
        "transaction_details": {
            "order_id": result.data.id,
            "gross_amount": result.data.attributes.totalPrice,
        }, "credit_card":{
            "secure" : true
        }
    };
    
    return snap.createTransaction(parameter);
}

// Function untuk memanggil result menggunakan midtrans Snap
async function midtransCoreFunction(serverKey, clienKey, midtransClient, result) {
    // Create Core API instance
    let core = new midtransClient.CoreApi({
        isProduction : false,
        serverKey : serverKey,
        clientKey : clienKey
    });

    let parameter = {
        "payment_type": "gopay",
        "transaction_details": {
            "order_id": result.data.id,
            "gross_amount": result.data.attributes.totalPrice,
        },
        "credit_card":{
            "token_id": 'CREDIT_CARD_TOKEN', // change with your card token
            "authentication": true
        }
    };

    // charge transaction
    return core.charge(parameter);
}