function fact( f ){
    if(f <= 1){
        return 1;
    }
    else{
        return f * fact(f-1);
    }
}


let a = parseInt(prompt("Enter the number to calculate factorial of"));
console.log(" Factorial of the given number is " + fact (a));