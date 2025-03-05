const correctPassword = "12345";
let input = prompt("Nhập mật khẩu:");
if (input === correctPassword) {
    alert("Mật khẩu chính xác! Đăng nhập thành công.");
} else {
    alert("Mật khẩu không đúng! Vui lòng thử lại.");
}