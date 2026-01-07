let good = false;
let cheap = false;
let fast = false;

function goodButton() {
    good = !good;

    if (good && cheap && fast) {
        fast = false;
    }

    update();
}

function cheapButton() {
    cheap = !cheap;

    if (good && cheap && fast) {
        good = false;
    }

    update();
}

function fastButton() {
    fast = !fast;

    if (good && cheap && fast) {
        cheap = false;
    }

    update();
}

function update() {
    setGoodButton(good);
    setCheapButton(cheap);
    setFastButton(fast);
}

function setGoodButton(state) {
    let button = document.getElementById("goodButton");

    if (state)
        button.classList.add("active");
    else
        button.classList.remove("active");

}

function setCheapButton(state) {
    let button = document.getElementById("cheapButton");

    if (state)
        button.classList.add("active");
    else
        button.classList.remove("active");
}

function setFastButton(state) {
    let button = document.getElementById("fastButton");

    if (state)
        button.classList.add("active");
    else
        button.classList.remove("active");
}