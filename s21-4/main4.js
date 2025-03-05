let a = +prompt("Hãy nhập số thứ nhất:");
let b = +prompt("Hãy nhập số thứ hai:");
let c = +prompt("Hãy nhập số thứ ba:");

if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            alert("Phương trình có vô số nghiệm.");
        } else {
            alert("Phương trình vô nghiệm.");
        }
    } else {
        let x = -c / b;
        alert(`Phương trình có một nghiệm: x = ${x}`);
    }
} else {
    let delta = b * b - 4 * a * c;

    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert(`Phương trình có hai nghiệm phân biệt:\n x1 = ${x1}\n x2 = ${x2}`);
    } else if (delta === 0) {
        let x = -b / (2 * a);
        alert(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
        alert("Phương trình vô nghiệm.");
    }
}
