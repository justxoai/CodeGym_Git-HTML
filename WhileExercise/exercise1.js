let number;
let total = 0;

while (true) {
    number = Number(prompt("Enter Number - '-1' to stop: "));

    if (number == -1) {
        break;
    }

    total += number;

}

document.write("Result: " + total);