let num = +prompt("Mời bạn nhập số nguyên:");
let check = 1;
if (num < 2 || isNaN(num)) {
    check = 0
} else {
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % 2 === 0) {
            check = 0;
            break;
        }
    }
}
if (check === 1) {
    alert(`${num} Là số nguyên tố`);
} else {
    alert(`${num} Không phải là số nguyên tố`);
}