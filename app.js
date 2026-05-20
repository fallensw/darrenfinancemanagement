const finance = require('./financeManager.js');

// Add income
finance.addTransaction("income", "Salary", "Monthly pay", 3000);
finance.addTransaction("expense", "Food", "Chicken Rice", 2.50);
finance.addTransaction("expense", "Food", "Milk", 1.50);
finance.addTransaction("expense", "Transport", "Monthly Concession Pass", 48.00);
finance.addTransaction("expense", "Food", "Macdonalds", 12.00);

//check balance
console.log("=BALANCE=");
console.log(finance.checkBalance());

//delete transaction 
console.log("=DELETE TRANSACTION=");
console.log(finance.deleteTransaction(3)); 

//check balance
console.log("=BALANCE AFTER DELETE=");
console.log(finance.checkBalance());

//summary
console.log("=SUMMARY=");
console.log(finance.getSummary());

//filter by expenses (food)
console.log("=FOOD EXPENSES=");
console.log(finance.filterExpensesByCategory("Food"));
//filter by expenses (transport)
console.log("=TRANSPORT EXPENSES=");
console.log(finance.filterExpensesByCategory("Transport"));
