import mongoose from "mongoose";
import { Schema } from "mongoose";

const citySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    population: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type:String,
        required: true,
    },
    });

export default mongoose.model("City", citySchema);