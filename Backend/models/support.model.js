const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SupportSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Email:{
        type: String,
        required: true
    },
    Message:{
        type: String,
        required: true
    }
}, {
    timestamps: true
}
)
const Support = mongoose.model("Support", SupportSchema)

module.exports = Support