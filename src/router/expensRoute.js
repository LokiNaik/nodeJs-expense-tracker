const express = require('express')
const expenseRoute = express.Router()
const expenseController = require('../controller/expenseController')

expenseRoute.post('/expenses', expenseController.createExpense)
expenseRoute.get('/expenses', expenseController.getAllExpenses)
expenseRoute.get('/expenses/:id', expenseController.getExpenses)

module.exports = expenseRoute