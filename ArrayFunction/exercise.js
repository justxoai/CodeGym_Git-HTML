function exercise1() {
    let array = ["Red", "Green", "White", "Black"];

    document.getElementById("result").innerHTML = array.join();
}

function exercise2() {
    let value = prompt("Enter a list of Number: ");
    let array = [];

    for (i = 0; i < value.length; i++) {
        array.push(value[i]);
    }

    let message = "";

    for (i = 0; i < array.length; i++) {

        message += array[i];

        if (array[i] % 2 == 0 && array[i + 1] % 2 == 0) {
            message += "-";
        }
    }

    document.getElementById("result2").innerHTML = message;
}

function exercise3() {
    let value = prompt("Enter String: ");

    let message = "";

    for (i = 0; i < value.length; i++) {
        let char = value[i];

        if (char >= 'a' && char <= 'z') {
            message += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            message += char.toLowerCase();
        } else {
            message += char;
        }
    }

    document.getElementById("result3").innerHTML = message;
}