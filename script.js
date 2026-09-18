// SpendWise JavaScript

// Variables
let budget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// Function to calculate total expenses
function calculateTotalExpenses(expenses) {
    let total = 0;

    for (let expense of expenses) {
        total = total + expense;
    }

    return total;
}

// Function to calculate remaining balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

// Main budgeting function
function startBudget() {

    // Get budget from the user
    let budgetInput = prompt("Enter your monthly budget:");

    if (budgetInput === null) {
        return;
    }

    budget = Number(budgetInput);

    // Get expenses from the user
    let food = Number(prompt("Enter your food expenses:"));
    let transport = Number(prompt("Enter your transport expenses:"));
    let entertainment = Number(prompt("Enter your entertainment expenses:"));

    // Store expenses
    let expenses = [food, transport, entertainment];

    // Calculate total expenses
    totalExpenses = calculateTotalExpenses(expenses);

    // Calculate remaining balance
    remainingBalance = calculateRemainingBalance(
        budget,
        totalExpenses
    );

    // Display results in the console
    console.log("===== SpendWise Budget Summary =====");
    console.log("Monthly Budget: " + budget);
    console.log("Food Expenses: " + food);
    console.log("Transport Expenses: " + transport);
    console.log("Entertainment Expenses: " + entertainment);
    console.log("Total Expenses: " + totalExpenses);
    console.log("Remaining Balance: " + remainingBalance);

    // Display results on the webpage
    document.getElementById("results").style.display = "block";

    document.getElementById("budgetResult").textContent =
        "Monthly Budget: " + budget;

    document.getElementById("expensesResult").textContent =
        "Total Expenses: " + totalExpenses;

    document.getElementById("balanceResult").textContent =
        "Remaining Balance: " + remainingBalance;

    // Check whether the user is within the budget
    if (remainingBalance >= 0) {
        document.getElementById("statusResult").textContent =
            "Status: You are within your budget.";

        console.log("Status: You are within your budget.");
    } else {
        document.getElementById("statusResult").textContent =
            "Status: You have exceeded your budget.";

        console.log("Status: You have exceeded your budget.");
    }
}

// Connect the button to the function
document.getElementById("startButton").addEventListener(
    "click",
    startBudget
);