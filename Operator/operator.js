let width = prompt("Enter Width of the Problem: ");
let height = prompt("Enter Height of the Problem: ");

document.getElementById("width").innerHTML = "Width: " + width;
document.getElementById("height").innerHTML = "Height: " + height;

document.getElementById("result").innerHTML = "Area of Rectengle: " + (Number(width)*Number(height));
