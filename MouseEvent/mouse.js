let imageBall = document.getElementById("ballImage");

function init(){
    imageBall = document.getElementById("ballImage");
    imageBall.style.position = "relative";
    imageBall.style.left = "0px";
}

function moveRight(){
    imageBall.style.left = parseInt(imageBall.style.left) + 10 + "px";
}

window.onload = init;