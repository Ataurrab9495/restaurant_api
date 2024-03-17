import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    product_id: mongoose.Schema.Types.ObjectId,
    product_name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});

export const Order = mongoose.model("Order", orderSchema);