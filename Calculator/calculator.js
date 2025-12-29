function calAddition(){
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = "Addition Result: " + (Number(firstNumber) + Number(secondNumber));
}

function calSubtraction(){
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = "Subtraction Result: " + (firstNumber - secondNumber);
}

function calMultiplication(){
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = "Multiplication Result: " + (firstNumber * secondNumber);
}

function calDivision(){
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = "Division Result: " + (firstNumber / secondNumber);
}

function calRemainder(){
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = "Remainder Result: " + (firstNumber % secondNumber);
}