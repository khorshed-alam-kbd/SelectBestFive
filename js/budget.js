// calculate player expense

document.getElementById('calculate-player-expenses').addEventListener("click", function () {

    const perPlayerExpenseElement = document.getElementById('budget-per-player');
    const perPlayerExpenseString = perPlayerExpenseElement.value;
    const perPlayerExpense = parseFloat(perPlayerExpenseString);

    const newPlayerExpenses = perPlayerExpense * 5;

    const previousPlayerExpensesElement = document.getElementById('player-expense');

    previousPlayerExpensesElement.innerText = newPlayerExpenses;

});

