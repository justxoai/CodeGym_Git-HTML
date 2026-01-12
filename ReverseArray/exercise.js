let array = [-3, 5, 1, 3, 2, 10];
document.write("Array: " +  array);

let reverseArray = [];
for(i = 0; i < array.length; i++){
    reverseArray.unshift(array[i]);
}
document.write("<br>")
document.write("Array after reverse: " +  reverseArray);