import { Product } from "../models/product.model.js";


// creating new product
export const newProduct = async (req, res, next) => {
    try {
        const { product_name, price } = req.body;

        await Product.create({
            product_name,
            price
        });

        res.status(201).json({
            success: true,
            message: "Product Added successfully"
        });
    } catch (error) {
        console.log(error);
    }
};

// get all products
export const getAllProduct = async (req, res, next) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            success: true,
            products
        });
    } catch (error) {
        console.log(error);
    }
};


// get single product
export const getSingleProduct = async (req, res, next) => {
    try {
        const { id } = req.params;

        const singleProduct = await Product.findById(id);

        res.status(200).json({
            success: true,
            singleProduct
        });

    } catch (error) {
        console.log(error);
    }
};


// update product
export const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { product_name, price } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(id, {
            product_name,
            price
        });

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
        })

    } catch (error) {
        console.log(error);
    }
};



// delete product
export const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        await product.deleteOne();

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        });

    } catch (error) {
        console.log(error);
    }
};

