let array = [];

function addNumberInArray(){
    array.push(document.getElementById("arrayNumber").value);
    alert("Adding Complete");
}

function displayNumber(){
    let message = "";

    for(i = 0; i < array.length; i++){
        message += "Element " + i + " = " + array[i] + "<br>";
    }

    document.getElementById("result").innerHTML = message;

}