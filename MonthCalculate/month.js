function calculateMonth(){
    let month = Number(document.getElementById("month").value);

    if (month <= 0 || month > 12){
        document.getElementById("result").innerHTML = "Vui lòng nhập tháng phù hợp";
        return;
    }

    switch (month){
        case 2:
            document.getElementById("result").innerHTML = "Tháng 2 có 28 hoặc 29 ngày";
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("result").innerHTML = "Tháng " + month + " có 31 ngày";
            break;
        default: 
            document.getElementById("result").innerHTML = "Tháng " + month + " có 30 ngày";
            break;
    }

}