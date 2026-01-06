function exercise1() {
    let firstNumber = Number(document.getElementById("firstNumber").value);
    let secondNumber = Number(document.getElementById("secondNumber").value);

    if (firstNumber == null || secondNumber == null) {
        document.getElementById("exercise1Result").innerHTML = "Please Enter Valid Number";
        return;
    }

    if (secondNumber == 0) {
        document.getElementById("exercise1Result").innerHTML = "Second Number can't be Zero";
        return;
    }

    if (firstNumber % secondNumber == 0)
        document.getElementById("exercise1Result").innerHTML = "Number a is divisible by b";
    else
        document.getElementById("exercise1Result").innerHTML = "Number a is not divisible by b";
}

function exercise2() {
    let studentAge = Number(document.getElementById("studentAge").value);

    if (studentAge == null) {
        document.getElementById("exercise2Result").innerHTML = "Please enter a valid Number";
        return;
    }

    if (studentAge < 0) {
        document.getElementById("exercise2Result").innerHTML = "Students age must be a positive number";
        return;
    }
    else if (studentAge > 100) {
        document.getElementById("exercise2Result").innerHTML = "Students are too old to study";
        return;
    }

    if (studentAge >= 15)
        document.getElementById("exercise2Result").innerHTML = "Students are eligible to study in grade 10";
    else
        document.getElementById("exercise2Result").innerHTML = "Students are not eligible to study in grade 10";

}

function exercise3() {
    let integetNumber = Number(document.getElementById("integerNumber").value);

    if (integetNumber == null) {
        document.getElementById("exercise3Result").innerHTML = "Please Enter a valid Number";
        return;
    }

    if (integetNumber < 0) {
        document.getElementById("exercise3Result").innerHTML = "Your Number: " + integetNumber + " is smaller than 0";
    }
    else {
        if (integetNumber == 0)
            document.getElementById("exercise3Result").innerHTML = "Your Number is 0";
        else
            document.getElementById("exercise3Result").innerHTML = "Your Number: " + integetNumber + " is bigger than 0";
    }
}

function exercise4() {
    let firstNumber = Number(document.getElementById("firstIntegerNumber").value);
    let secondNumber = Number(document.getElementById("secondIntegerNumber").value);
    let thirdNumber = Number(document.getElementById("thirdIntegerNumber").value);

    if (firstNumber == null || secondNumber == null || thirdNumber == null) {
        document.getElementById("exercise4Result").innerHTML = "Please Enter valid Numbers";
        return;
    }

    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        document.getElementById("exercise4Result").innerHTML = "First Number is the Biggest Number";
    }
    else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        document.getElementById("exercise4Result").innerHTML = "Second Number is the Biggest Number";
    }
    else
        document.getElementById("exercise4Result").innerHTML = "Third Number is the Biggest Number";
}

function exercise5() {
    let finalScore = Number(document.getElementById("finalScore").value);
    let semester1Score = Number(document.getElementById("semester1Score").value);
    let semester2Score = Number(document.getElementById("semester2Score").value);

    if (finalScore == null || semester1Score == null || semester2Score == null) {
        document.getElementById("exercise5Result").innerHTML = "Please Enter valid Numbers";
        return;
    }

    if (finalScore < 0 || finalScore > 10) {
        document.getElementById("exercise5Result").innerHTML = "Please Enter valid Final Score";
        return;
    }

    if (semester1Score < 0 || semester1Score > 10) {
        document.getElementById("exercise5Result").innerHTML = "Please Enter valid Semester I Score";
        return;
    }

    if (semester2Score < 0 || semester2Score > 10) {
        document.getElementById("exercise5Result").innerHTML = "Please Enter valid Semester II Score";
        return;
    }

    let averageScore = (semester1Score + semester2Score + finalScore) / 3;

    if (averageScore < 6.5) {
        document.getElementById("exercise5Result").innerHTML = "Poor Student";
    }
    else if (averageScore >= 6.5 && averageScore < 8) {
        document.getElementById("exercise5Result").innerHTML = "Good Student";
    }
    else {
        document.getElementById("exercise5Result").innerHTML = "Excellent Student";
    }
}

function exercise6() {
    let moneyValue = Number(document.getElementById("saleRevenue").value);

    if (moneyValue == null) {
        document.getElementById("exercise6Result").innerHTML = "Please Enter Valid Number";
        return;
    }

    if (moneyValue < 0) {
        document.getElementById("exercise6Result").innerHTML = "You don't have any Commission cause the Money is Negative";
        return;
    } else
        document.getElementById("exercise6Result").innerHTML = "Your Commission: " + moneyValue * 10 / 100;

}

function exercise7() {
    let intraMoney = Number(document.getElementById("intraNetwork").value);
    let extraMoney = Number(document.getElementById("extraNetwork").value);
    let internationalMoney = Number(document.getElementById("international").value);

    if (intraMoney == null || extraMoney == null || internationalMoney == null) {
        document.getElementById("exercise7Result").innerHTML = "Please Enter Valid Number of minutes";
        return;
    }

    if (intraMoney < 0 || extraMoney < 0 || internationalMoney < 0) {
        document.getElementById("exercise7Result").innerHTML = "Please Enter Valid Number of minutes";
        return;
    } else {
        document.getElementById("exercise7Result").innerHTML = "You have to pay: " + (25000 + intraMoney*800 + extraMoney*1200 + internationalMoney*3000);
    }
}