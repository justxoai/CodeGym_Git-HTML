// let productArray = ["Iphone", "Samsung", "Xiaomi"];
let productArray = [];

function displayProduct() {
    let tableContent = "";
    for (i = 0; i < productArray.length; i++) {
        tableContent += "<tr>";
        tableContent += "<td>" + productArray[i] + "</td>";
        tableContent += "<td><button onclick='editProduct("+i+")'>Edit</button></td>"
        tableContent += "<td><button onclick='removeProduct("+i+")'>Remove</button></td>"
    }

    document.getElementById("productList").innerHTML = tableContent;
}

function addProduct() {
    let itemName = document.getElementById("productName").value;

    if (itemName == "") {
        alert("Please Enter valid Item Name!");
        return;
    }

    productArray.push(itemName);
    document.getElementById("productName").value = "";
    displayProduct();
}

function editProduct(index) {
    for(i = 0; i < productArray.length; i++){
        if(i == index){
            let newName = prompt("Enter new name for this Product: ");
            productArray[i] = newName;
        }
    }

    displayProduct();
}

function removeProduct(index) {
    if(confirm("Do you want to remove this Product?")){
        productArray.splice(index, 1);
        displayProduct();
    }

}

displayProduct();
