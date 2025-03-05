let countEven = 0;
let countOdd = 0;
for (let i = 1; i <= 5; i++) {
    let N = +prompt("Nhập số nguyên thứ " + i + ":");
    if (isNaN(N)) {
        alert("Dữ liệu nhập vào không hợp lệ, vui lòng nhập số nguyên!");
        i--;
        continue;
    }
    if (N % 2 === 0) {
        countEven++;
    } else {
        countOdd++;
    }
}
alert("Số lượng số chẵn: " + countEven + "\nSố lượng số lẻ: " + countOdd);
