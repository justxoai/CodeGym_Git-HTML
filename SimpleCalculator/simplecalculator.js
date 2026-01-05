let display = document.getElementById("display");

function press0() {
    display.value += 0;
}
function press1() {
    display.value += 1;
}
function press2() {
    display.value += 2;
}
function press3() {
    display.value += 3;
}
function press4() {
    display.value += 4;
}
function press5() {
    display.value += 5;
}
function press6() {
    display.value += 6;
}
function press7() {
    display.value += 7;
}
function press8() {
    display.value += 8;
}
function press9() {
    display.value += 9;
}
function press0() {
    display.value += 0;
}
function pressPlus() {
    display.value += "+";
}
function pressMinus() {
    display.value += "-";
}
function pressMul() {
    display.value += "*";
}
function pressDivide() {
    display.value += "/";
}

function clearC() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}