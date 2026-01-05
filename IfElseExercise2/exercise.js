let username = prompt("Enter User name: ",'');

if (username == "Admin"){
    let password = prompt("Enter Password: ",'');
    if(password == "TheMaster"){
        alert("Welcome");
    }
    else{
        if(password == null){
            alert("Canceled");
        }
        else{
            alert("Wrong password")
        }
    }
}
else{
    if (username == null){
        alert("Canceled");
    }
    else{
        alert("I don't know you")
    }
}