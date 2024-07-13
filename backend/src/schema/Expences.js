import mongoose from "mongoose";

const expencesSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    description:{
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    }
});

const Expences = mongoose.model("Expences", expencesSchema);

export default Expences;
