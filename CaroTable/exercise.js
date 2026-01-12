let message = "";

let array = [0, 0, 0, 0, 0];

for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
        message += array[j] + " ";
    }
    message += "<br>";
}

document.getElementById("caroGame").innerHTML = message;

function changeValue() {
    message = "";
    let row = Number(prompt("Enter a Row value for change: ")) - 1;
    let column = Number(prompt("Enter a Column value for change: ")) - 1;

    if (row < 0 || column < 0 || row > 5 || column > 5) {
        alert("Enter Valid Number of Row and Column");
        return;
    } else {
        for (i = 0; i < 5; i++) {
            for (j = 0; j < 5; j++) {
                if(i == column  && j == row ){
                    message += "x" + " ";
                }
                else {
                    message += array[j] + " "; 
                }
            }
            message += "<br>";
        }

        document.getElementById("caroGame").innerHTML = message;
    }
}

