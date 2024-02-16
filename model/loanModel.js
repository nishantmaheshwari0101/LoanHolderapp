const mongoose = require('mongoose')

const personalrecordschema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    // dateOfBirth: {
    //     type: Date,
    //     required: true
    // },
    // contact: {
    //     type: String,
    //     required: true
    // },
    // Email: {
    //     type: String,
    //     required: true
    // },
    // address: {
    //     street: String,
    //     city: String,
    //     state: String,
    //     postalCode: String,
    //     country: String
    // },
    // bankDetails: {
    //     bankName: String,
    //     accountNumber: String,
    //     IRFCCode: String
        
    // },
    // loanAmount: {
    //     type: Number,
    //     required: true
    // },
    // installments: {
    //     type: Number,
    //     required: true
    // },
    // totalLoanDuration: {
    //     type: Number,
    //     required: true
    // },
    // interestRate: {
    //     type: Number,
    //     required: true
    // },
    // loanStartDate : {
    //     month: {
    //         type: Number,
    //         required: true
    //     },
    //     year: {
    //         type: Number,
    //         required: true
    //     }
    // }



})

module.exports = mongoose.model("Loan" , personalrecordschema)