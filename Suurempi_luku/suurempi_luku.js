const prompt = require("prompt-sync")();

const num1 = prompt("Give a number: ");
const num2 = prompt("Give second number: ");

if (num1 < num2){
    console.log(num2, " is higher than ", num1)
}
else if (num2 < num1){
    console.log(num1, " is higher than number ", num2)
}