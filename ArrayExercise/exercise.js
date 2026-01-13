function exercise1() {
    let givenArray = [1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15];
    let count = 0;

    document.getElementById("information1").innerHTML = "Given Array: [" + givenArray + "]";

    for (i = 0; i < givenArray.length; i++) {
        if (givenArray[i] >= 10)
            count++;
    }

    document.getElementById("result1").innerHTML = "Given Array has: " + count + " numbers >= 10";
}

function exercise2() {
    let givenArray = [1, 234, 32, 45, 15, 107, 114, 128, 153, 134, 15];
    let maxNumber = givenArray[0];
    let index;

    document.getElementById("information2").innerHTML = "Given Array: [" + givenArray + "]";

    for (i = 0; i < givenArray.length; i++) {
        if (givenArray[i] > maxNumber) {
            maxNumber = givenArray[i];
            index = i;
        }
    }

    document.getElementById("result2").innerHTML = "Max Number in Given Array is: " + maxNumber + " in index: " + Number(index);
}

function exercise3() {
    let givenArray = [1, 234, 32, 45, 15, 107, 114, 128, 153, 134, 15];
    let maxNumber = givenArray[0];
    let sumArray = 0;

    document.getElementById("information3").innerHTML = "Given Array: [" + givenArray + "]";

    for (i = 0; i < givenArray.length; i++) {

        sumArray += givenArray[i];

        if (givenArray[i] > maxNumber) {
            maxNumber = givenArray[i];
        }
    }

    document.getElementById("result3").innerHTML = "Max Number in Given Array is: " + maxNumber + " and Avarage value: " + Number(sumArray / givenArray.length);
}

function exercise4() {
    let givenArray = [1, 234, 32, 45, 15, 107, 114, 128, 153, 134, 15];

    document.getElementById("information4").innerHTML = "Given Array: [" + givenArray + "]";
    document.getElementById("result4").innerHTML = "Reverse Array: [" + givenArray.reverse() + "]";
}

function exercise5() {
    let givenArray = [1, -234, 32, 45, 15, -107, 114, -128, 153, -134, 15];
    let count = 0;
    document.getElementById("information5").innerHTML = "Given Array: [" + givenArray + "]";

    for (i = 0; i < givenArray.length; i++) {
        if (givenArray[i] < 0) {
            count++;
        }
    }

    document.getElementById("result5").innerHTML = "There are: " + count + " negative numbers";

}

function exercise6() {
    let givenArray = [1, -234, 32, 45, 15, -107, 114, -128, 153, -134, 15];
    let findNumber = Number(prompt("Enter a number to find: "));
    let checked = false;
    document.getElementById("information6").innerHTML = "Given Array: [" + givenArray + "]";

    for (i = 0; i < givenArray.length; i++) {
        if (givenArray[i] == findNumber) {
            checked = true;
            break;
        }
    }


    if (checked)
        document.getElementById("result6").innerHTML = "Your Number is in the Array"
    else
        document.getElementById("result6").innerHTML = "Your Number is not in the Array"
}

function exercise7() {
    let givenArray = [1, -234, 32, 45, 15, -107, 114, -128, 153, -134, 15];
    let findNumber = Number(prompt("Enter a number to find: "));
    let indexNumber;
    let checked = false;
    document.getElementById("information7").innerHTML = "Given Array: [" + givenArray + "]";

    for (i = 0; i < givenArray.length; i++) {
        if (givenArray[i] == findNumber) {
            indexNumber = i;
            checked = true;
            break;
        }
    }

    if (checked) {
        for (i = indexNumber; i < givenArray.length - 1; i++) {
            givenArray[i] = givenArray[i + 1];
        }

        givenArray[givenArray.length - 1] = 0

        document.getElementById("result7").innerHTML = "Your Number has been delete in the Array: " + givenArray;
    }
    else
        document.getElementById("result7").innerHTML = "Your Number is not in the Array";
}

function exercise8() {
    let givenArray = [1, 234, 32, 45, 10, 107, 114, 128, 153, 134, 15];

    document.getElementById("information8").innerHTML = "Given Array: [" + givenArray + "]";

    for (let i = 0; i < givenArray.length - 1; i++) {
        for (let j = i + 1; j < givenArray.length; j++) {
            if (givenArray[i] < givenArray[j]) {
                let temp = givenArray[i];
                givenArray[i] = givenArray[j];
                givenArray[j] = temp;
            }
        }
    }

    document.getElementById("result8").innerHTML = "Sorted Array: [" + givenArray + "]";

}

function exercise9(){
    let arrayA = [1, 2, 3, 4, 5];
    let arrayB = [6, 7, 8, 9, 10];

    let arrayC = arrayA.concat(arrayB);

    document.getElementById("information9").innerHTML = "Given Array A: [" + arrayA + "]";
    document.getElementById("information91").innerHTML = "Given Array B: [" + arrayB + "]";

    document.getElementById("result9").innerHTML = "Array C: [" + arrayC + "]";

}