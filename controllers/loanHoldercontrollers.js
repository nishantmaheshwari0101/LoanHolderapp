const Loan = require("../model/loanModel")

const getAllLoans = async (req, res) => {
    const allLoans = await Loan.find();
    if (!allLoans) {
        res.json({ error: "no loan holder here" })
    }
    res.json(allLoans)
}

const getLoanHolders = (req, res) => {
    res.send("single loan holder")
}

const createLoanholder = async (req, res) => {
    const { firstName, lastName } = req.body

    if (!firstName || !lastName) {
        res.json({ error: "please fill all details" })
    }
    
    const newLoanHolder = await Loan.create({
        firstName : firstName,
        lastName : lastName
    })

    if (newLoanHolder) {
        res.status(201).json(newLoanHolder)
    }
}

module.exports = { getAllLoans, getLoanHolders, createLoanholder }