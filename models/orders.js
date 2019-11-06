var mongoose = require('mongoose');

var OrdersSchema = mongoose.Schema({

    total: String,
    shipping_cost: String,
    date_insert: Date,
    status_payment: String,
    date_shipment: Date,
    date_payment: Date,
    status_shipment: Boolean,
    delivery_address: String,
    delivery_city: String,
    delivery_zipcode: Number,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'articles' }],

})

module.exports = mongoose.model('orders', OrdersSchema);