import mongoose from "mongoose";

export const connectToDB = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "adsremedy",
    }).then(result =>
        console.log(`Db connection is established in ${result.connection.host}`))
        .catch(err => console.error('Error connecting to MongoDB:', err));
};