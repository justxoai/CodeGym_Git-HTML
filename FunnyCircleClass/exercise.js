function createCircle(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random()*80);
    let color = getRandomColor();
    let xPosition = Math.random()*window.innerWidth;
    let yPosition = Math.random()*window.innerHeight;
    let circle= new FunnyCircle(xPosition, yPosition, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function getRandomNumber(){
    return Math.floor(Math.random() * 255);
}
function getRandomColor(){
    let redColor = getRandomNumber();
    let greenColor = getRandomNumber();
    let blueColor = getRandomNumber();

    return "rgb(" + redColor + "," + greenColor +"," + blueColor + ")"; 
}


for(i = 0; i < 20; i++){
    createCircle();
}