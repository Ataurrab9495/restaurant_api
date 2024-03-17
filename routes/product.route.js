import express from "express";
import { newProduct, getAllProduct, getSingleProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const app = express.Router();

// route - /api/v1/product/new
app.post('/new', newProduct);

// route - /api/v1/product/all
app.get('/all', getAllProduct);

app.route('/:id')
    .get(getSingleProduct)
    .put(updateProduct)
    .delete(deleteProduct);

export default app;