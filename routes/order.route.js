import express from "express";
import { newOrder, getAllOrder } from "../controllers/order.controller.js";

const app = express.Router();

// route - /api/v1/order/new_order
app.post('/new_order', newOrder);

// route - /api/v1/order/all_order
app.get('/all_order', getAllOrder);

export default app;