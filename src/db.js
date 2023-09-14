import mongoose from "mongoose";

export const connectDB = async () => {
    try {
       await mongoose.connect("mongodb+srv://miguelangelborjagallego:Mianboga@cluster0.agqava4.mongodb.net/"); 
       console.log(">> DB Connect "); 
    } catch (error) {
        console.log(error)
    }
}