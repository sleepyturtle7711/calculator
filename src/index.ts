#!/usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet";

console.clear();
console.log(figlet.textSync("SHADI-CALCULATOR"));
const validator = (value: string): boolean | string => {
  if (isNaN(parseInt(value))) {
    return "its not a number try it again";
  } else {
    return true;
  }
};
interface Calculator {
  firstNumber: string;
  operation: "+" | "-" | "*" | "/" | "%";
  secondNumber: string;
}

let again: boolean = false;
//take input number
const init = async () => {
  const result: Calculator = await inquirer.prompt([
    {
      type: "string",
      name: "firstNumber",
      message: "please enter your first number",
      validate: validator,
    },
    {
      type: "list",
      name: "operation",
      message: "please select your desire opration",
      choices: ["+", "-", "*", "/", "%"],
    },
    {
      type: "string",
      name: "secondNumber",
      message: "please enter your second number",
      validate: validator,
    },
  ]);
  const fisrtNumber = parseInt(result.firstNumber);

  const secondNumber = parseInt(result.secondNumber);

  switch (result.operation) {
    case "+":
      console.log("The result is ", fisrtNumber + secondNumber);
      break;
    case "-":
      console.log("The result is ", fisrtNumber - secondNumber);
      break;
    case "*":
      console.log("The result is ", fisrtNumber * secondNumber);
      break;
    case "/":
      console.log("The result is ", fisrtNumber / secondNumber);
      break;
    case "%":
      console.log("The result is ", fisrtNumber % secondNumber);
      break;
    default:
      "Inavlid Data";
  }
  const confrimResult = await inquirer.prompt([
    {
      type: "confirm",
      name: "confrim",
      message: "Do yoy want again",
    },
  ]);
  again = confrimResult.confrim;
};
//take a opration
// take second inpput
// results
// take another chance
do {
  await init();
} while (again);
