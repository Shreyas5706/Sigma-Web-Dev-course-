// /* Create a faulty calculator using JavaScript

// This faulty calculator does following:
// 1. It takes two numbers as input from the user
// 2. It perfoms wrong operations as follows:

// + ---> -
// * ---> +
// - ---> /
// / ---> **


// It performs wrong operation 10% of the times

// */
// const prompt=require('prompt-sync')();
// /* let a=prompt("Enter Value of a ");
// let b=prompt("Enter Value of b ");
// console.log("Addition is ",a-b)
// console.log("Multiplication is ",a+b)
// console.log("Subtraction is ",a/b)
// console.log("Division is ",a**b)
//  */
// /* const prompt=require('prompt-sync')();
// let userInput = prompt("Please enter something:");
// console.log("You entered: " + userInput); */

// let num1 = parseInt(prompt("Enter first number:"));
// let num2 = parseInt(prompt("Enter second number:"));

// // Perform incorrect operations
// let addition = num1 - num2;
// let subtraction = num1 / num2;
// let multiplication = num1 + num2;
// let division = num1 ** num2;

// console.log(`Incorrect results:
// - Addition: ${num1} + ${num2} = ${addition}
// - Subtraction: ${num1} - ${num2} = ${subtraction}
// - Multiplication: ${num1} * ${num2} = ${multiplication}
// - Division: ${num1} / ${num2} = ${division}`);

console.log(25)
let num1=parseInt(prompt("Enter number 1"))
let num2=parseInt(prompt("Enter number 2"))

console.log("Num 1 is"+ num1 +" \nNum 2 is " + num2)
let random=Math.random()

let add,mul,div,sub;


console.log(random)

if(random<=0.1){
  add= num1-num2;
  mul=num1+num2;
  div=num1**num2;
  sub=num1/num2;
}
else{
    
    add=num1+num2;
    mul=num1*num2;
    div=num1/num2;
    sub=num1-num2;
}

console.log("Addition is "+add)
console.log("Multiplication is "+mul)
console.log("Division is "+div)
console.log("Subtraction is "+sub)
