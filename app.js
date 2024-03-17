import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./utils/features.js";

// importing routes
import productRoute from "./routes/product.route.js";
import orderRoute from "./routes/order.route.js";


dotenv.config({
    path: "../.env"
});

const PORT = process.env.PORT || 4040;

const app = express();

// connecting to Db

connectToDB();

app.use(express.json());

/* app.use("/", (req, res, next) => {
    res.send("I am ON.");
}); */

app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

