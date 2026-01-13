function exercise1() {
    let matrix = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ];

    let message = "";

    for (i = 0; i < matrix.length; i++) {
        message += "row " + Number(i + 1) + ": ";
        for (j = 0; j < matrix[i].length; j++) {
            message += matrix[i][j] + " ";
        }
        message += "<br>"
    }

    document.getElementById("result1").innerHTML = message;
}

function exercise2() {
    let givenArray = ['c', 's', 'c', '2', '6', '1'];

    let message = "";

    document.getElementById("information2").innerHTML = "Given Array: [" + givenArray + "]";

    for (i = givenArray.length - 1; i >= 0; i--) {
        message += givenArray[i];
    }

    document.getElementById("result2").innerHTML = "Output: " + message;
}

function exercise3() {
    let givenArray = ['c', 's', 'c', '2', '6', '1'];
    let count = 0;

    document.getElementById("information3").innerHTML = "Given Array: [" + givenArray + "]";

    for (i = 0; i < givenArray.length; i++) {
        if (givenArray[i] >= 0 && givenArray[i] <= 9) {
            count++;
        }
    }

    document.getElementById("result3").innerHTML = "Number (0-9) Digit: " + count;
}
function exercise4() {
    let givenText = prompt("Enter List String: ");
    let count = 0;
    let inWord = false;

    document.getElementById("information4").innerHTML = "Given Text: " + givenText;

    for (i = 0; i < givenText.length; i++) {
        if (givenText[i] != ' ' && inWord == false) {
            count++;
            inWord = true;
        }
        else if (givenText[i] === ' ') {
            inWord = false;
        }
    }

    document.getElementById("result4").innerHTML = "Word in Given Text: " + count;
}

function exercise5() {
    let givenText1 = prompt("Enter String No1: ");
    let givenText2 = prompt("Enter String No2: ");
    let sameString = false;

    if (givenText1.length != givenText2.length) {
        document.getElementById("result5").innerHTML = "2 String not the same";
    }
    else {
        for (i = 0; i < givenText1.length; i++) {
            if (givenText1[i] != givenText2[i]) {
                document.getElementById("result5").innerHTML = "2 String not the same";
                sameString = true;
                break;
            }
        }
    }

    if (!sameString) {
        document.getElementById("result5").innerHTML = "2 String not the same";
    } else
        document.getElementById("result5").innerHTML = "2 String same each other";
}

function exercise6() {
    let givenText1 = prompt("Enter String: ");
    let givenText2 = "";

    document.getElementById("information6").innerHTML = "Given Text: " + givenText1;


    for (i = 0; i < givenText1.length; i++) {
        if (givenText1[i] == "-") {
            givenText2 += "_";
        } else {
            givenText2 += givenText1[i];
        }
    }

    document.getElementById("result6").innerHTML = "Text after changing: " + givenText2;

}