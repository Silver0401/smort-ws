const mongoose = require("mongoose")
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Email:{
        type: String,
        required: true
    },
    Phone:{
        type:Number,
        required: true
    },
    SiteEspecifications:{
        type: Object,
        required: true
    },
    PageStyleDetails:{
        type: Object,
        required: true
    },
    PaymentInfo:{
        type: Object,
        required: true
    }
}, {
    timestamps: true
}
)
const Order = mongoose.model("Order", OrderSchema)

module.exports = Order