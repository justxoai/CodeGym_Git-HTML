let number = Number(prompt("Enter a number: "));
let result = 0;

if (number > 0 ){
    for(let i = 1; i <= number; i++){
        result += i;
    }
}
else
    document.write("Please enter number > 0");

document.write("Sum from 1 to " + number + " is: " + result);
