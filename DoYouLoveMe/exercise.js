function yesButton(){
    alert("I love you too <3");
}

function noButton(){
    let noButton = document.getElementById("noButton");

    noButton.style.position = "absolute";

    let maxX = window.innerWidth - noButton.offsetWidth;
    let maxY = window.innerWidth - noButton.offsetHeight;

    let randomX = Math.floor(Math.random()* maxX);
    let randomY = Math.floor(Math.random()* maxY);

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}