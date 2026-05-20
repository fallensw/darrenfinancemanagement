let transactions = [];
let nextId = 1;
//Function 1: add transactions
function addTransaction(type, category, item, amount) { 
    let newTransaction = { id: nextId, type: type, category: category, item: item, amount: amount };
    transactions.push(newTransaction);
    nextId = nextId + 1;
    return newTransaction;
}
//Function3: check balance
function checkBalance() {
    let income = 0;
    let expense = 0;
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].type === "income") {
            income = income + transactions[i].amount;
        } else if (transactions[i].type === "expense") {
            expense = expense + transactions[i].amount;
        }
    }
    return { totalIncome: income, totalExpense: expense, balance: income - expense };
}
//Function 2: delete transactions
function deleteTransaction(id) {
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].id === id) {
            let deleted = transactions[i];
            for (let j = i; j < transactions.length - 1; j++) {
                transactions[j] = transactions[j + 1];
            }
            transactions.length = transactions.length - 1;
            return deleted;
        }
    }
    return { error: "not found" };
}
//Function4: Summary
function getSummary() {
    let expenseDetails = {};
    for (let i = 0; i < transactions.length; i++) {
        let t = transactions[i];
        if (t.type === "expense") {
            if (expenseDetails[t.category] === undefined) {
                expenseDetails[t.category] = {};
            }
            if (expenseDetails[t.category][t.item] === undefined) {
                expenseDetails[t.category][t.item] = 0;
            }
            expenseDetails[t.category][t.item] = expenseDetails[t.category][t.item] + t.amount;
        }
    }
    return { allTransactions: transactions, totalCount: transactions.length, expenseBreakdown: expenseDetails };
}
//function5: Filter by category
function filterExpensesByCategory(category) {
    let items = [];
    let totalSpent = 0;
    
    for (let i = 0; i < transactions.length; i++) {
        let t = transactions[i];
        if (t.type === "expense" && t.category === category) {
            items.push({ item: t.item, amount: t.amount, id: t.id });
            totalSpent = totalSpent + t.amount;
        }
    }
    return {
        category: category,
        items: items,
        totalSpent: totalSpent,
        itemCount: items.length
    };
}
module.exports = { 
addTransaction, 
deleteTransaction, 
checkBalance, 
getSummary, 
filterExpensesByCategory 
};
