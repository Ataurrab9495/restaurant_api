import { Order } from "../models/order.model.js";

export const newOrder = async(req, res, next) => {
    try {
        const {product_id, product_name, quantity} = req.body;

        await Order.create({
            product_id,
            product_name,
            quantity
        });

        res.status(201).json({
            success: true,
            message: "Order Added successfully"
        });
    } catch (error) {
        console.log(error);
    }
};


export const getAllOrder = async(req, res, next) => {
    try {
        const orders = await Order.find();

        res.status(200).json({
            success: true,
            orders
        });
    } catch (error) {
        console.log(error);
    }
}