let  array = [-3, 5, 1, 3, 2, 10]

let number = prompt("Enter a Number: ");
let find = false;
for(i = 0; i < array.length; i++){
    if(number == array[i]){
        alert("Nuber: " + number + " is in the Array, at position: " + (Number(i) + 1));
        find = true;
    }
}

if(!find){
    alert("Can't find the Number in the Array");
}