function exercise1() {
    let message = document.getElementById("exercise1Result");
    let a = 0, b = 1, c;
    let output = "";

    for (let i = 1; i <= 20; i++) {
        output += a + " ";
        c = a + b
        a = b;
        b = c;
    }

    message.innerHTML = output;
}

function exercise2() {
    let numberValue = Number(prompt("Please enter a Positive Integer Number: "));
    let result = 1;

    if (numberValue == null | numberValue < 0) {
        document.getElementById("exercise2Result").innerHTML = "Please enter a valid number";
    }
    else if (numberValue == 0) {
        document.getElementById("exercise2Result").innerHTML = "0! = 1";
    } else {
        for (i = 1; i <= numberValue; i++) {
            result *= i;
        }
        document.getElementById("exercise2Result").innerHTML = numberValue + "! = " + result;
    }
}

function exercise3() {
    let output = "";

    for (let i = 1; i <= 5; i++) {
        let stars = "";

        for (let j = 1; j <= i; j++) {
            stars += "*";
        }

        output += stars + "<br>";
    }

    output += "<br>";

    for (let i = 5; i >= 1; i--) {
        let stars = "";

        for (let j = 1; j <= i; j++) {
            stars += "*";
        }

        output += stars + "<br>";
    }

    output += "<br>";

    for (let i = 1; i <= 5; i++) {
        let line = "";

        for (let s = 5; s > i; s--) {
            line += "&nbsp;&nbsp;";
        }

        for (let j = 1; j <= i; j++) {
            line += "*";
        }

        output += line + "<br>";
    }

    output += "<br>";

    for (let i = 5; i >= 1; i--) {
        let line = "";

        for (let s = 5; s > i; s--) {
            line += "&nbsp;&nbsp;";
        }

        for (let j = 1; j <= i; j++) {
            line += "*";
        }

        output += line + "<br>";
    }

    document.getElementById("exercise3Result").innerHTML = output;
}

function exercise4() {
    let height = 7;
    let width = 21;
    let output = "";

    for (i = 1; i <= height; i++) {
        let line = "";

        for (j = 1; j <= width; j++) {

            if (i == 1 || i == height || j == 1 || j == width) {
                line += "*";
            }
            else
                line += "&nbsp;&nbsp;";

        }

        output += line + "<br>";

    }

    document.getElementById("exercise4Result").innerHTML = output;

}

function exercise5(){
    let bankMoney = Number(document.getElementById("bankMoney").value);
    let bankMonth = Number(document.getElementById("bankMonth").value);

    if(bankMoney == null || bankMonth == null || bankMoney <= 0 || bankMonth < 0 ){
        document.getElementById("exercise5Result").innerHTML = "Please Enter valid Value";
    }
    else
        document.getElementById("exercise5Result").innerHTML = "Interest After " + bankMonth + " is: " + bankMoney*((1+0.01)**bankMonth);
}