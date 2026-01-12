let enDic = ["black", "white", "blue", "green", "yellow", "red"];
let vnDic = ["Đen", "Trắng", "Xanh dương", "Xanh lá", "Vàng", "Đỏ"];

function translateButton(){
    let textValue = document.getElementById("textValue").value;

    let booleanValue = false;

    for (i = 0; i < enDic.length; i++) {
        if (textValue.toLowerCase() === enDic[i]) {
            document.getElementById("result").innerHTML = "Từ của bạn: " + textValue + " sang tiếng Việt là: " + vnDic[i];
            booleanValue = true;
            break;
        }
    }

    if (!booleanValue) {
        document.getElementById("result").innerHTML = "Không tìm thấy từ của bạn";
    }

}