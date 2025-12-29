function changeMoney(){
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    if(from == "VND" && to == "VND"){
        if(amount >= 1000){
            document.getElementById("result").innerHTML = "Amount after change from VND to VND: " + amount/1000 + ".000 vnd";
        } else {
            document.getElementById("result").innerHTML = "Amount after change from VND to VND: " + amount + ".000 vnd";
        }
    }
    else if(from == "USD" && to == "USD"){
        document.getElementById("result").innerHTML = "Amount after change from USD to USD: " + amount + " $";
    }
    else if(from == "USD" && to == "VND"){
        document.getElementById("result").innerHTML = "Amount after change from USD to VND: " + (amount*25) + ".000 vnd";
    }
    else{
         if(amount >= 1000){
            document.getElementById("result").innerHTML = "Amount after change from VND to USD: " + amount/25000 + " $";
        } else {
            document.getElementById("result").innerHTML = "Amount after change from VND to USD: " + amount/25 + " $";
        }
    }

}