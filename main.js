import inquirer from "inquirer";
const userInput = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Enter User ID"
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter your Pin"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["current", "saving"],
        message: "select your account type"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["fast cash", "cash withdraw", "balance inquirey"],
        message: "select your transaction"
    },
    {
        type: "number",
        name: "amount",
        message: "enter amount you want to withdraw",
        when(userInput) {
            return userInput.transactionType === "cash withdraw";
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 5000, 10000, 250000],
        message: "enter amount you want to withdraw",
        when(userInput) {
            return userInput.transactionType === "fast cash";
        }
    },
]);
const userID = userInput.userID;
const userPin = userInput.userPin;
const enteredAmount = userInput.amount;
if ((userID && userPin) && userInput.transactionType === "balance inquirey") {
    const userBalance = Math.floor(Math.random() * 100000);
    console.log(`"your current balance is Rs ${userBalance}\n"`);
}
else if (userID && userPin) {
    const userBalance2 = Math.floor(Math.random() * 100000);
    if (userBalance2 > enteredAmount) {
        console.log(`"your account has been debited with Rs ${enteredAmount} and your remaining balance is ${userBalance2 - enteredAmount}"`);
    }
    else {
        console.log("\n unsuuficient Balance");
    }
}
