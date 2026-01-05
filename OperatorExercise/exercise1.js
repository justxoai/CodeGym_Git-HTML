let message = prompt("Enter a message: ");

let result = (message == "Employee") ? "Hello" : (message == "Director") ? "Greetings" : (message == "") ? "No Login" : "";

alert(result)