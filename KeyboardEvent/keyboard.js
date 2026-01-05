function arrowUp(){
    let image = document.getElementById("image");
    image.style.top = parseInt(image.style.top) - 10 + "px";
}
function arrowDown(){
    let image = document.getElementById("image");
    image.style.top = parseInt(image.style.top) + 10 + "px";
}
function arrowLeft(){
    let image = document.getElementById("image");
    image.style.left = parseInt(image.style.left) - 10 + "px";
}
function arrowRight(){
    let image = document.getElementById("image");
    image.style.left = parseInt(image.style.left) + 10 + "px";
}

function keyboardClick(evt){
    switch (evt.keyCode){
        case 38:
            arrowUp();
            break;
        case 40:
            arrowDown();
            break;
        case 37:
            arrowLeft();
            break;
        case 39:
            arrowRight();
            break;
    }
}

function doReady(){
    window.addEventListener('keydown', keyboardClick)
}
