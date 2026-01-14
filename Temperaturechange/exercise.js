function calculate(inputValue){
    return (inputValue - 32)/1.8;
}

function getValue(){
    let inputValue = document.getElementById("inputValue").value;

    let result = calculate(Number(inputValue));

    document.getElementById("outputValue").innerHTML = "Celcius: " + result;
}