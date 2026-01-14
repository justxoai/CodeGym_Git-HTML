function findMin(array, min){

    for(i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
        }
    }

    return min;
}

let arr1 = [3, 5, 1, 8, -3, 7, 8];

let arr2 = [7, 12, 6, 9, 20, 56, 89];

let arr3 = [];

let arr4 = [0, 0, 0, 0, 0, 0];

document.write("Array No1: " + arr1 + "<br>")
document.write("Min number in Array No1: " + findMin(arr1, arr1[0]) + "<br>")

document.write("Array No2: " + arr2 + "<br>")
document.write("Min number in Array No2: " + findMin(arr2, arr2[0]) + "<br>")

document.write("Array No3: " + arr3 + "<br>")
document.write("Min number in Array No3: " + findMin(arr3, arr3[0]) + "<br>")

document.write("Array No4: " + arr4 + "<br>")
document.write("Min number in Array No4: " + findMin(arr4, arr4[0]) + "<br>")