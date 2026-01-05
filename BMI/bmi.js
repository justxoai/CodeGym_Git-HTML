function calculateBMI(){
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);

    if(weight <= 0 || height <= 0){
        document.getElementById("result").innerHTML = "Vui lòng nhập giá trị phù hợp";
        return;
    }

    let result = weight/(height**2);

    if (result < 18.5)
        document.getElementById("result").innerHTML = "Kết quả của bạn: Underweight" ;
    else if (result >= 18.5 && result < 25)
        document.getElementById("result").innerHTML = "Kết quả của bạn: Normal";
    else if (result >= 25 && result < 30)
        document.getElementById("result").innerHTML = "Kết quả của bạn: Overweight";
    else 
        document.getElementById("result").innerHTML = "Kết quả của bạn: Obese";
}