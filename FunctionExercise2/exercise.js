function exercise1() {
    let inputValue = Number(prompt("Enter a Number: "));

    document.write("Square Value is: " + inputValue * inputValue);
}

function exercise2() {
    let inputValue = Number(prompt("Enter a Radius Number: "));

    document.write("Area of the Circle is: " + 3.14 * inputValue * inputValue);
    document.write("<br>")
    document.write("Cir of the Circle is: " + inputValue * 2 * 3.14);
}

function exercise3() {
    let inputValue = Number(prompt("Enter a Number: "));
    let result = 1;

    for (i = 1; i <= inputValue; i++) {
        result *= i;
    }

    document.write("Giai thua: " + result)
}

function exercise4() {
    let inputValue = prompt("Enter a character: ");

    if (inputValue >= '0' && inputValue <= '9') {
        document.write(inputValue + " is a Number");
    }
    else {
        document.write(inputValue + " is a Character");
    }
}

function exercise5() {
    let inputValue1 = Number(prompt("Enter first Number: "));
    let inputValue2 = Number(prompt("Enter second Number: "));
    let inputValue3 = Number(prompt("Enter third Number: "));

    if (inputValue1 < inputValue2 && inputValue1 < inputValue3) {
        document.write(inputValue1 + " is the smallest Number");
    }

    if (inputValue2 < inputValue1 && inputValue2 < inputValue3) {
        document.write(inputValue1 + " is the smallest Number");
    }

    if (inputValue3 < inputValue1 && inputValue3 < inputValue2) {
        document.write(inputValue1 + " is the smallest Number");
    }
}

function exercise6() {
    let inputValue = Number(prompt("Enter a Number: "));

    if (inputValue > 0) {
        document.write(inputValue + " is a Positive Number");
    }
    else {
        document.write(inputValue + " is not a Positive Number");
    }
}

function exercise7() {
    let inputValue1 = Number(prompt("Enter first Number: "));
    let inputValue2 = Number(prompt("Enter second Number: "));

    document.write("First Number before Swap: " + inputValue1);
    document.write("<br>");
    document.write("Second Number before Swap: " + inputValue2);
    document.write("<br>");

    let result = swap(inputValue1, inputValue2);

    document.write("First Number after Swap: " + result[0]);
    document.write("<br>");
    document.write("Second Number after Swap: " + result[1]);
    document.write("<br>");
}

function swap(a, b) {
    return [b, a];
}

function exercise8() {
    let numbers = [1, 2, 3, 4, 5];
    let result = reverseArray(numbers);

    document.write(result);
}

function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

function exercise9() {
    let characters = ['a', 'b', 'a', 'c', 'a', 'd'];
    let inputChar = prompt("Enter a Character:");

    let result = countCharacter(characters, inputChar);

    document.write("Output: " + result);
}

function countCharacter(arr, char) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === char) {
            count++;
        }
    }

    if (count === 0) {
        return -1;
    }

    return count;
}