function checkPrimeNumber(inputNumber){
    if(inputNumber < 2){
        return false;
    }

    for(i = 2; i <= Math.sqrt(inputNumber); i++){
        if(inputNumber % i == 0){
            return false;
        }
    }

    return true;
}

function getPrimeNumber(){
    let inputNumber = Number(document.getElementById("inputValue").value);

    if(checkPrimeNumber(inputNumber))
        document.getElementById("outputValue").innerHTML = "Your number: " + inputNumber + " is a Prime Number";
    else
        document.getElementById("outputValue").innerHTML = "Your number: " + inputNumber + " is not a Prime Number";
        
}