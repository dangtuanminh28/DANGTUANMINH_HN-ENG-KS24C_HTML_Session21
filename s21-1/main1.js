let sum = 0;

for (let i = 1; i <= 5; i++) {
    let N = +prompt(`Nhập số nguyên thứ ${i}:`);
    if (isNaN(N)) {
        alert("Dữ liệu không hợp lệ! Vui lòng nhập lại.");
        i--;
        continue;
    }
    if (N % 2 !== 0) {
        sum += N;
    }
}
alert(`Tổng các số lẻ đã nhập là: ${sum}`);
