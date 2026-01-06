function exercise1() {
    let cValue = Number(document.getElementById("cValue").value);

    if (cValue == null) {
        document.getElementById("resultExercise1").innerHTML = "Please Enter valid Value";
    }
    else
        document.getElementById("resultExercise1").innerHTML = "F Value after change is: " + (cValue * 9 / 5 + 32);

}

function exercise2() {
    let mValue = Number(document.getElementById("mValue").value);

    if (mValue == null || mValue < 0) {
        document.getElementById("resultExercise2").innerHTML = "Please Enter valid Value";
    }
    else
        document.getElementById("resultExercise2").innerHTML = "Value change from: " + mValue + "m to " + mValue * 3.2808 + "ft";

}

function exercise3() {
    let edgeValue = Number(document.getElementById("squareValue").value);

    if (edgeValue == null || edgeValue < 0) {
        document.getElementById("resultExercise3").innerHTML = "Please Enter valid Value";
    }
    else
        document.getElementById("resultExercise3").innerHTML = "Area of Square: " + edgeValue ** 2;

}

function exercise4() {
    let firstEdge = Number(document.getElementById("firstRecValue").value);
    let secondEdge = Number(document.getElementById("secondRecValue").value);

    if (firstEdge == null || secondEdge == null || firstEdge <= 0 || secondEdge <= 0) {
        document.getElementById("resultExercise4").innerHTML = "Please Enter valid Value";
    }
    else
        document.getElementById("resultExercise4").innerHTML = "Area of Rectengle: " + firstEdge * secondEdge;
}

function exercise5() {
    let firstEdge = Number(document.getElementById("firstTriValue").value);
    let secondEdge = Number(document.getElementById("secondTriValue").value);

    if (firstEdge == null || secondEdge == null || firstEdge <= 0 || secondEdge <= 0) {
        document.getElementById("resultExercise5").innerHTML = "Please Enter valid Value";
    }
    else
        document.getElementById("resultExercise5").innerHTML = "Area of Square Triangle: " + firstEdge * secondEdge / 2;
}

function exercise6() {
    let a = Number(document.getElementById("firstNumber").value);
    let b = Number(document.getElementById("secondNumber").value);
    let c = Number(document.getElementById("thirdNumber").value);

    if (a == null || b == null || c == null) {
        document.getElementById("resultExercise6").innerHTML = "Please Enter valid Value";
    }

    if (a == 0) {
        document.getElementById("resultExercise6").innerHTML = "Phương trình vô nghiệm";
    } else if (b == 0) {
        document.getElementById("resultExercise6").innerHTML = "x: " + c / a;
    } else if (c == 0) {
        document.getElementById("resultExercise6").innerHTML = "x: " + (-b) / a;
    } else {
        document.getElementById("resultExercise6").innerHTML = "x: " + (c - b) / a;
    }
}

function exercise7() {
    let a = Number(document.getElementById("firstNumber2").value);
    let b = Number(document.getElementById("secondNumber2").value);
    let c = Number(document.getElementById("thirdNumber2").value);
    let d = Number(document.getElementById("thirdNumber2").value);

    if (a == null || b == null || c == null || d == null) {
        document.getElementById("resultExercise7").innerHTML = "Please Enter valid Value";
    }

    if (a == 0) {
        if (b == 0) {
            if (c - d == 0) {
                document.getElementById("resultExercise7").innerHTML = "Phương trình vô số nghiệm";
            } else {
                document.getElementById("resultExercise7").innerHTML = "Phương trình vô nghiệm";
            }
        } else {
            document.getElementById("resultExercise7").innerHTML = "x: " + (-c + d) / b;
        }
    } else {
        let delta = b * b - 4 * a * (c - d);

        if (delta < 0) {
            document.getElementById("resultExercise7").innerHTML = "Phương trình có nghiệm ảo";
        } else if (delta == 0) {
            document.getElementById("resultExercise7").innerHTML = "x: " + -b / (2 * a);
        } else {
            document.getElementById("resultExercise7").innerHTML = "x1: " + (-b + Math.sqrt(delta)) / (2 * a) + ", x2: " + (-b - Math.sqrt(delta)) / (2 * a);
        }
    }
}

function exercise8() {
    let humanAge = Number(document.getElementById("humanAgeValue").value);

    if (humanAge == null || humanAge <= 0 || humanAge >= 120) {
        document.getElementById("resultExercise8").innerHTML = "This Number is not Human Age";
    }
    else
        document.getElementById("resultExercise8").innerHTML = "This Number is Human Age";
}

function exercise9() {
    let a = Number(document.getElementById("firstTriValue1").value);
    let b = Number(document.getElementById("secondTriValue2").value);
    let c = Number(document.getElementById("thirdTriValue3").value);

    if (a == null || b == null || c == null) {
        document.getElementById("resultExercise9").innerHTML = "Please Enter valid Value";
    }
    else {
        if (a > 0 && b > 0 && c > 0) {
            if(a + b > c && b + c > a && a + c > b){
            document.getElementById("resultExercise9").innerHTML = "Three Values enter is three edge of triangle";
            }
            else
            document.getElementById("resultExercise9").innerHTML = "Three Values enter is not three edge of triangle";
        }
        else
            document.getElementById("resultExercise9").innerHTML = "Egde of Triangle must bigger than 0";
    }
}

function exercise10() {
    let electriMoney = Number(document.getElementById("elecValue").value);

    if(electriMoney == null || electriMoney < 0){
        document.getElementById("resultExercise10").innerHTML = "Please Enter valid Value";
    }
    else
        document.getElementById("resultExercise10").innerHTML = "Electric bill: " + electriMoney*4000 + " vnd";
}

function exercise11() {
    let salaryMoney = Number(document.getElementById("salary").value);

    if(salaryMoney == null || salaryMoney < 0){
        document.getElementById("resultExercise11").innerHTML = "Please Enter valid Value";
    }
    else
        document.getElementById("resultExercise11").innerHTML = "Tax: " + salaryMoney*8/100 + " vnd";
}

function exercise12() {
    let bankMoney = Number(document.getElementById("bankMoney").value);
    let bankMonth = Number(document.getElementById("bankMonth").value);

    if(bankMoney == null || bankMonth == null || bankMoney <= 0 || bankMonth < 0 ){
        document.getElementById("resultExercise12").innerHTML = "Please Enter valid Value";
    }
    else
        document.getElementById("resultExercise12").innerHTML = "Interest After " + bankMonth + " is: " + bankMoney*((1+0.01)**bankMonth);
}