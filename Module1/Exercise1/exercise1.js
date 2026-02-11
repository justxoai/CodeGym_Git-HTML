let n = 0;
let listNumber = [];

// Nhập giá trị n
// Điều kiện: n là số nguyên, n > 0, n <= 50
function inputN() {
    while (true) {
        n = Number(prompt("Vui lòng nhập giá trị n:"));

        if (n > 0 && n <= 50 && !isNaN(n))
            break;
    }

    document.getElementById("n_value").innerHTML = "Dãy số gồm có: " + n + " phần tử.";
}

// Nhập từng giá trị vào trong mảng
function inputArray() {
    if (n <= 0 || n > 50) {
        alert("Vui lòng nhập giá trị n !!!");
        return;
    }

    for (i = 0; i < n; i++) {
        listNumber[i] = Number(prompt("Vui lòng nhập giá trị cho phần tử thứ " + (i + 1) + ":"));
    }

    document.getElementById("input_array").innerHTML = "Đã hoàn tất quá trình nhập giá trị !";
}

// Hiển thị mảng đã có giá trị
function showArray() {
    if (listNumber.length == 0) {
        alert("Vui lòng nhập các giá trị vào mảng trước !!!");
        return;
    }

    document.getElementById("show_array").innerText = "Mảng hiện tại gồm: [" + listNumber.join(", ") + "]";
}

// Tính giá trị
function showResult() {
    if (listNumber.length == 0) {
        alert("Vui lòng nhập các giá trị vào mảng trước !!!");
        return;
    }

    let sum = 0;
    let count = 0;

    for (let i = 0; i < listNumber.length; i += 2) {
        if (listNumber[i] % 2 != 0) {
            sum += listNumber[i];
            count++;
        }
    }

    if (count == 0)
        document.getElementById("show_result").innerText = "Không có giá trị lẻ nào ở vị trí chẵn !!!";
    else
        document.getElementById("show_result").innerText = " Giá trị trung bình của các số lẻ ở vị trí chẵn: " + sum / count;
}
