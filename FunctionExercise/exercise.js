function alertMessage() {
    alert("Hello Word")
}

function getNumber() {
    let inputNumber = prompt("Please Enter a Number: ");

    document.write("Your number after increase 1: " + (Number(inputNumber) + 1))
}

function checkNumber() {
    let numberNo1 = prompt("Enter first Number: ");
    let numberNo2 = prompt("Enter second Number: ");

    if (Number(numberNo1) > Number(numberNo2)) {
        alert("Your First Number is bigger than Second Number");
    }
    else {
        alert("Sum of 2 Number is: " + (Number(numberNo1) + Number(numberNo2)));
    }
}

function addNumbers() {
    let firstNum = 4;
    let secondNum = 8;
    let result = firstNum + secondNum;
    return result;
}

// let result = 0;
// alert("Giá trị result trước khi gọi hàm: " + result);

// result = addNumbers();
// alert("Giá trị result sau khi gọi hàm: " + result);

let arrayNo1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];

let arrayNo2 = ["Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

function checkStar(){
    let inputValue = prompt("Enter name of a star: ");
    let index;

    for(i = 0; i < arrayNo1.length; i++){
        if(inputValue == arrayNo1[i]){
            index = i;
            break;
        }
    }

    document.write("Your Star: " + arrayNo2[index]);
}