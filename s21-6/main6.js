let n = +prompt("Nhập vào một số nguyên bất kỳ:");
if (!isNaN(n) && n > 0) {
    let num = "Các ước của " + n + " là: ";
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            num += i + " ";
        }
    }
    alert(num);
} else {
    alert("Vui lòng nhập vào một số nguyên dương hợp lệ!");
}