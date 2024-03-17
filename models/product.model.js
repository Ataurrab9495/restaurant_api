import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});

export const Product = mongoose.model("Product", productSchema);