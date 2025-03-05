let n = +prompt("Nhập vào số lượng số nguyên tố cần in:");
let dem = 0;
let so = 2;
while (dem < n) {
    let laNguyenTo = true;
    for (let i = 2; i <= Math.sqrt(so); i++) {
        if (so % i === 0) {
            laNguyenTo = false;
            break;
        }
    }

    if (laNguyenTo) {
        console.log(so);
        dem++;
    }

    so++;
}
