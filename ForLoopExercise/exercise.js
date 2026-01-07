function exercise1() {
    let message = document.getElementById("exercise1Result");

    let output = "";

    for (let i = 1; i <= 100; i++) {
        output += i + " ";

        if (i == 99) {
            alert("Count Complete");
        }
    }

    message.innerHTML = output;
}

function exercise2() {
    let thermalValue = Number(prompt("Please enter your room temp: "));
    let message = document.getElementById("exercise2Result");

    if (thermalValue == null) {
        message.innerHTML = "Please enter valid temp";
    }
    else {
        if (thermalValue <= 100) {
            if (thermalValue < 20) {
                message.innerHTML = "Your need to turn on the Heat AC";
            }
            else {
                message.innerHTML = "Your room temp normal";
            }
        }
        else {
            message.innerHTML = "You need to turn on the AC";
        }
    }
}

function exercise3() {
    let message = document.getElementById("exercise3Result");
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

function exercise4() {
    let message = document.getElementById("exercise4Result");
    let a = 0, b = 1, c;

    for (let i = 1; i <= 20; i++) {
        if (a % 5 == 0 && a != 0) {
            message.innerHTML = a;
            break;
        }
        c = a + b
        a = b;
        b = c;
    }

}

function exercise5(){
    let message = document.getElementById("exercise5Result");
    let a = 0, b = 1, c;
    let total = 0;

    for (let i = 1; i <= 20; i++) {
        total += a;
        c = a + b
        a = b;
        b = c;
    }

    message.innerHTML = "Sum of 20 Number in Fibo: " + total;
}

function exercise6(){
    let message = document.getElementById("exercise6Result");
    let total = 0;
    let count = 0;
    let n = 0;

    while (count < 30){
        if(n % 7 == 0){
            total += n;
            count++;
        }

        n++;
    }

    message.innerHTML = "Sum of 30 numbers can divide 7: " + total;
}

function exercise7(){
    let message = document.getElementById("exercise7Result");

    let output = "";

    for (let i = 1; i <= 100; i++) {
        if(i % 15 == 0){
            output += "FizzBuzz" + " ";
        }else{
            if(i % 3 == 0){
                output += "Fizz" + " ";
            }
            else if(i % 5 == 0){
                output += "Buzz" + " ";
            }
            else output += i + " ";
        }
    }

    message.innerHTML = output;
}

function exercise8(){
    let maxNumber = Number(prompt("Enter bound Number to guest: from 0 to: "));

    if(maxNumber == null){
        alert("Please enter valid number");
        return;
    }

    let correctNumber = Math.floor(Math.random()*(maxNumber + 1));

    let guess, n = 0;

    while(n < 3) {
        guess = Number(prompt("Guest your Number:"));

        if (guess == null) {
            alert("Please enter valid number");
        }
        else if (guess > correctNumber) {
            alert("Your guess bigger than correct Number");
        }
        else if (guess < correctNumber) {
            alert("Your guess smaller than correct Number");
        }
        else{
            alert("Your guess is correct: " + correctNumber);
        }

        n++;
    }  

    alert("Let's play again");
}