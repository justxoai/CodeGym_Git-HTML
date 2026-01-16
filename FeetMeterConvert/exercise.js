function changeToFeet(inputValue){
    document.getElementById("outputValue").innerHTML = "From: " + inputValue + " m -> " + 3.279*inputValue + " ft";
}

function changeToMeter(inputValue){
    document.getElementById("outputValue").innerHTML = "From: " + inputValue + " ft -> " + 0.305*inputValue + " m";
}

function getInputValue(){   
    let inputValue = Number(document.getElementById("inputValue").value);
    
    let typeConvert = document.getElementById("inputType").value;

    if(inputValue == null || inputValue < 0 ){
        document.getElementById("outputValue").innerHTML = "Please enter valid Number";
    }
    else{
        if(typeConvert == "ft")
            changeToMeter(inputValue);
        else
            changeToFeet(inputValue);
    }
}