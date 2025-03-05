// Nhập dữ liệu từ người dùng
let tienGoc = parseFloat(prompt("Nhập số tiền ban đầu:"));
let laiSuat = parseFloat(prompt("Nhập lãi suất tháng (%):")) / 100;
let soThang = parseInt(prompt("Nhập số tháng gửi:"));

// Kiểm tra dữ liệu nhập vào
if (isNaN(tienGoc) || isNaN(laiSuat) || isNaN(soThang) || tienGoc <= 0 || laiSuat <= 0 || soThang <= 0) {
    console.log("Dữ liệu nhập vào không hợp lệ.");
} else {
    // Tính tiền nhận được theo công thức lãi kép
    let tongTien = tienGoc * Math.pow(1 + laiSuat, soThang);
    let tienLai = tongTien - tienGoc;

    // Hiển thị kết quả
    alert(`Tiền lãi: ${tienLai.toFixed(3)}`);
    alert(`Tiền nhận được: ${tongTien.toFixed(3)}`);
}
