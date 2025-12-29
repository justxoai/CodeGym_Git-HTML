// Exercise 1
function calculateAverage() {
    let physicScore = document.getElementById("physic").value;
    let chemistryScore = document.getElementById("chemistry").value;
    let biologyScore = document.getElementById("biology").value;

    document.getElementById("averageScore").innerHTML = "Average Score of Phy, Chem, Bio: " + ((Number(physicScore) + Number(chemistryScore) + Number(biologyScore)) / 3);
}

// Exercise 2
function calculateFahrenheit() {
    let cValue = document.getElementById("celsuis").value;

    document.getElementById("fahrenheitValue").innerHTML = "Trans from Celsuis to Fahrenheit: " + ((9 * Number(cValue) / 5) + 32);
}

// Exercise 3 & 4
function calculateArea() {
    let widthValue = document.getElementById("width").value;
    let heightValue = document.getElementById("height").value;

    document.getElementById("result").innerHTML = "Area of Rec: " + (Number(widthValue) * Number(heightValue));

}

function calculateCir() {
    let widthValue = document.getElementById("width").value;
    let heightValue = document.getElementById("height").value;

    document.getElementById("result").innerHTML = "Perimeter of Rec: " + ((Number(widthValue) + Number(heightValue))*2);

}