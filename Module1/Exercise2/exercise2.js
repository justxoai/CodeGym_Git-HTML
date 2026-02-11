// Tính tổng của các
function sumOfDivisors(n) {
    let sum = 0;

    // Điều kiện: Tổng tất cả các ước trừ chính nó
    for (i = 1; i <= n/2; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }

    return sum;
}

function checkNumber() {
    let a = Number(document.getElementById("firstNumber").value);
    let b = Number(document.getElementById("secondNumber").value);

    if (a <= 0 || b <= 0 || isNaN(a) || isNaN(b)) {
        alert("Vui lòng nhập hai số nguyên dương hợp lệ !!!");
        return;
    }

    let aCondition = sumOfDivisors(a); // Tổng ước số của số thứ nhất
    let bCondition = sumOfDivisors(b); // Tổng ước số của số thứ hai

    if (aCondition == b && bCondition == a) {
        document.getElementById("result").innerHTML = "2 số: " + a + " và " + b + " là một cặp số thân thiết.";
    } else {
        document.getElementById("result").innerHTML = "2 số: " + a + " và " + b + " không phải là một cặp số thân thiết.";
    }
}
