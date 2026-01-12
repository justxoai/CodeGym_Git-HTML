let array = [-3, 5, 1, 3, 2, 10];

let maxNumber = array[0];

for(i = 0; i < array.length; i++){
    if(maxNumber < array[i]){
        maxNumber = array[i];
    }
}

document.write("The Array: " + array);
document.write("<br> The maximum Number in the array is: " + maxNumber);