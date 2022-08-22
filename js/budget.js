// calculate player expense

document.getElementById('calculate-player-expenses').addEventListener("click", function () {

    const perPlayerExpenseElement = document.getElementById('budget-per-player');
    const perPlayerExpenseString = perPlayerExpenseElement.value;
    const perPlayerExpense = parseFloat(perPlayerExpenseString);

    const newPlayerExpenses = perPlayerExpense * 5;

    const previousPlayerExpensesElement = document.getElementById('player-expense');

    previousPlayerExpensesElement.innerText = newPlayerExpenses;

});

// calculate total expenses 
document.getElementById('calculate-total-expense').addEventListener("click", function () {

    const previousPlayerExpensesElement = document.getElementById('player-expense');
    const previousPlayerExpensesString = previousPlayerExpensesElement.innerText;
    const PlayerExpenses = parseFloat(previousPlayerExpensesString);

    const managerExpenseElement = document.getElementById('manager-expanse');
    const managerExpenseString = managerExpenseElement.value;
    const managerExpense = parseFloat(managerExpenseString);

    const coachExpenseElement = document.getElementById('coach-expense');
    const coachExpenseString = coachExpenseElement.value;
    const coachExpense = parseFloat(coachExpenseString);

    const newTotalExpenses = PlayerExpenses + managerExpense + coachExpense;

    const previousTotalExpensesElement = document.getElementById('total-expense');

    previousTotalExpensesElement.innerText = newTotalExpenses;

});