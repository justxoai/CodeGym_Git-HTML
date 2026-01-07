function checkPrimeNumber(number){
    if(number < 2){
        return false;
    }

    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i == 0){
            return false;
        }
    }
    
    return true;
}

function listPrimeNumber(){
    let number = Number(document.getElementById("number").value);
    let message = document.getElementById("result");

    if(number == null || number <= 0){
        message.innerHTML = "Please enter valid number";
        return;
    }

    let count = 0;
    let n = 2;
    let output = "";

    while (count < number){
        if(checkPrimeNumber(n)){
            output += n + " ";
            count++;;
        }
        n++;
    }

    message.innerHTML = output;
}