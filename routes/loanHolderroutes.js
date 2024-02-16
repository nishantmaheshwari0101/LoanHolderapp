const express = require('express');
const { getAllLoans, getLoanHolders, createLoanholder } = require('../controllers/loanHoldercontrollers');

const router = express.Router()

router.get("/" , getAllLoans)
router.get("/:id" , getLoanHolders)
router.post("/create" , createLoanholder)

module.exports = router;