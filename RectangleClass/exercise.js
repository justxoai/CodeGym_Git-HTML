function createRectangle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");

    let width = Math.floor(Math.random() * 80);
    let length = Math.floor(Math.random() * 80);
    let color = getRandomColor();

    let xPosition = Math.random() * window.innerWidth;
    let yPosition = Math.random() * window.innerHeight;

    let myRec = new Rectangle(xPosition, yPosition, length, width);

    ctx.fillStyle = color;
    ctx.fillRect(20, 30, myRec.width, myRec.length);

    document.getElementById("information").innerHTML = "Area: " + myRec.calculateArea() + " and " + "Perimeter: " + myRec.calculateSurface();
}

function getRandomNumber() {
    return Math.floor(Math.random() * 255);
}
function getRandomColor() {
    let redColor = getRandomNumber();
    let greenColor = getRandomNumber();
    let blueColor = getRandomNumber();

    return "rgb(" + redColor + "," + greenColor + "," + blueColor + ")";
}

createRectangle();




