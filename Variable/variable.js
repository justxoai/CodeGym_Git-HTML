// Exercise 1
let i = 10;

let f = 20.5;
let b = true;
let s = "Hà Nội";

document.getElementById("1").innerHTML = "i = " + i;
document.getElementById("2").innerHTML = "f = " + f;
document.getElementById("3").innerHTML = "b = " + b;
document.getElementById("4").innerHTML = "s = " + s;

// Exercise 2
let width = 20;
let height = 10;

let area = width*height;

document.getElementById("width").innerHTML = "Width = " + width;
document.getElementById("height").innerHTML = "Height = " + height;
document.getElementById("area").innerHTML = "Area = " + area;

// Exercise 3
let numberNo1 = prompt("Enter number a: ");
let numberNo2 = prompt("Enter number b: ");

if(numberNo1 % numberNo2 == 0){
    alert("a chia hết cho b");
}
else {
    alert("a không chia hết cho b");
}