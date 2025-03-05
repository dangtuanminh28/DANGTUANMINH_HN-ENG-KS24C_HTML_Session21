let n = 10;
document.write(`a.<br>`);
for (let j = 1; j <= n; j++) {
    for (let i = 0; i < j - 1; i++) {
        document.write(`&nbsp;&nbsp;`);
    }
    for (let i = n; i >= j; i--) {
        document.write(`*`);
    }
    document.write(`<br>`);
}
document.write(`<br>b.<br>`);
for (let j = 1; j <= n; j++) {
    for (let i = n; i > j; i--) {
        document.write(`&nbsp;&nbsp;`);
    }
    for (let i = 0; i < j; i++) {
        document.write(`*`);
    }
    document.write(`<br>`);
}
document.write(`<br>c.<br>`);
for (let j = 1; j <= n; j++) {
    for (let i = n; i > j; i--) {
        document.write(`&nbsp;&nbsp;`);
    }
    for (let i = 0; i < j; i++) {
        document.write(`*`);
    }
    document.write(`<br>`);
}
document.write(`<br>d.<br>`);
for (let j = 1; j <= n; j++) {
    for (let i = 0; i < j - 1; i++) {
        document.write(`&nbsp;&nbsp;`);
    }
    for (let i = n; i >= j; i--) {
        document.write(`*`);
    }
    document.write(`<br>`);
}
