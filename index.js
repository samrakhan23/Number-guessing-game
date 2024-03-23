#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number between (1 - 5)",
    },
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed a right number");
}
else {
    console.log("Sorry! You guessed a wrong number");
}
