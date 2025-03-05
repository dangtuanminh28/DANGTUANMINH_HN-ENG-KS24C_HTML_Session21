for (let n = 100; n <= 999; n++) {
    let number = n;
    let sum = 0;

    while (number > 0) {
        let chuSo = number % 10;
        sum += chuSo * chuSo * chuSo;
        number = Math.floor(number / 10);
    }

    if (sum === n) {
        console.log(n);
    }
}
