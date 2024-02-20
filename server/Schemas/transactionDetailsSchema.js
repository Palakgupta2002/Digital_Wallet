import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    transactionType: {
        type: String,
        enum: ['income', 'expense'],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        enum: ['rent', 'salary', 'friends give', 'hospital', 'shopping', 'other'],
        default: 'other'
    },
    date: {
        type: Date,
        required: true
    }
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
