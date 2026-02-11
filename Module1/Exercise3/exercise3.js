let bookArray = [];
let editingIndex = -1;

// Kiểm tra thông tin sách
function validateBook(id, year, quantity) {

    // Kiểm tra ID sách
    if (id.length > 5 || id.length <= 0) {
        alert("Mã sách không hợp lệ !!!");
        return false;
    }

    if (id[0] < 1 || id[0] > 5) {
        alert("Mã sách không hợp lệ !!!");
        return false;
    }

    for (i = 1; i < id.length; i++) {
        if (id[i] < 0) {
            alert("Mã sách không hợp lệ !!!");
            return false;
        }
    }

    // Kiểm tra năm của sách
    if (year < 1000 || year > 2026) {
        alert("Năm xuất bản không lợp lệ !!!");
        return false;
    }

    // Kiểm tra số lượng sách
    if (quantity < 0) {
        alert("Số sách không hợp lệ !!!");
        return false;
    }

    return true;
}

function addBook() {
    let bookId = document.getElementById("idInput").value;
    let bookName = document.getElementById("nameInput").value;
    let bookYear = Number(document.getElementById("yearInput").value);
    let bookQuantity = Number(document.getElementById("quantityInput").value);

    if (!validateBook(bookId, bookYear, bookQuantity)) {
        alert("Vui lòng kiểm tra lại thông tin của sách !!!")
        return;
    }

    let newBook = new Book(bookId, bookName, bookYear, bookQuantity);

    bookArray.push(newBook);

    clearInput();
    displayBook();
}

function saveBook() {
    if (editingIndex == -1) {
        addBook();
    }
    else {
        let bookId = document.getElementById("idInput").value;
        let bookName = document.getElementById("nameInput").value;
        let bookYear = Number(document.getElementById("yearInput").value);
        let bookQuantity = Number(document.getElementById("quantityInput").value);

        if (!validateBook(bookId, bookYear, bookQuantity)) {
            alert("Vui lòng kiểm tra lại thông tin của sách !!!")
            return;
        }

        bookArray[editingIndex] = new Book(bookId, bookName, bookYear, bookQuantity);

        editingIndex = -1;

        clearInput();
        displayBook();
    }
}

function editBook(index) {
    editingIndex = index;

    document.getElementById("idInput").value = bookArray[index].bookId;
    document.getElementById("nameInput").value = bookArray[index].bookName;
    document.getElementById("yearInput").value = bookArray[index].bookPublishYear;
    document.getElementById("quantityInput").value = bookArray[index].bookQuantity;

}

function borrowBook(i) {
    bookArray[i].borrowBook();

    displayBook();
}

function removeBook(i) {
    bookArray.splice(i, 1);

    displayBook();
}

function displayBook() {
    let tableContent = "";

    for (let i = 0; i < bookArray.length; i++) {

        let avail = "";
        if(bookArray[i].bookAvailable > 0)
            avail = "Còn sách"
        else 
            avail = "Hết sách"

        tableContent += "<tr>";
        tableContent += "<td>" + Number(i + 1) + "</td>";
        tableContent += "<td>" + bookArray[i].bookId + "</td>";
        tableContent += "<td>" + bookArray[i].bookName + "</td>";
        tableContent += "<td>" + bookArray[i].bookPublishYear + "</td>";
        tableContent += "<td>" + bookArray[i].bookQuantity + "</td>";
        tableContent += "<td>" + avail + "</td>";
        tableContent += "<td>" + "<button onclick='borrowBook(" + i + ")'>Mượn sách</button><br>" + "<button onclick='editBook(" + i + ")'>Chỉnh sửa </button><br>" + "<button onclick='removeBook(" + i + ")'>Xóa</button>" + "</td>";
        tableContent += "</tr>";
    }

    document.getElementById("bookContent").innerHTML = tableContent;
}

function clearInput() {
    document.getElementById("idInput").value = "";
    document.getElementById("nameInput").value = "";
    document.getElementById("yearInput").value = "";
    document.getElementById("quantityInput").value = "";
}

displayBook();
