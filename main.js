//1
let getSign = (a, b) => { return a < b ? -1 : a > b ? 1 : 0; }

document.write(getSign(2, 5));
document.write('<br>');
document.write(getSign(5, 2));
document.write('<br>');
document.write(getSign(2, 2));
document.write('<br>');
document.write('<br>');
//2
let factorial = a => { return a != 1 ? a *= factorial(a - 1) : a; }
let a = 5;

document.write(`Факториал числа: ${a} = ${factorial(a)}`);

document.write('<br>'); document.write('<br>');
//3
let combineNumbersToString = (a, b, c) => { return String(a) + String(b) + String(c); }

document.write(combineNumbersToString(1, 4, 9));
document.write('<br>'); document.write('<br>');

//4
let calculateArea = (a, b = a) => { return a * b; }

document.write(`Площадь: ${calculateArea(5, 10)}`);
document.write(`Площадь: ${calculateArea(5)}`);
document.write('<br>'); document.write('<br>');

//5
function isPerfectNumber(number) {
    if (number <= 1) {
        return false;
    }

    let sum = 1;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sum += i;
            if (i !== number / i) {
                sum += number / i;
            }
        }
    }

    return sum === number;
}
const testNumber = 28;
if (isPerfectNumber(testNumber)) {
    document.write(`${testNumber} - совершенное число.`);
} else {
    document.write(`${testNumber} - не совершенное число.`);
}

document.write('<br>');
document.write('<br>');
//6
let findPerfectNumbersInRange = (a, b) => {
    for (let i = a; i <= b; i++)
        isPerfectNumber(i) ? document.write(`Число ${i} является совершенным!`) : null;
}

findPerfectNumbersInRange(0, 1000);
document.write('<br>'); document.write('<br>');

//7
let formatTime = (a, b = 0, c = 0) => {
    a <= 9 ? a = "0" + a : null;
    b <= 9 ? b = "0" + b : null;
    c <= 9 ? c = "0" + c : null;

    return a + ":" + b + ":" + c;
}
document.write(formatTime(3, 8, 1));
document.write(formatTime(25, 10, 15));
document.write(formatTime(3));
document.write('<br>'); document.write('<br>');

//8
let getTimeInSeconds = (a, b = 0, c = 0) => { return (a * 3600) + (b * 60) + (c) }

document.write(getTimeInSeconds(3, 8, 1));
document.write(getTimeInSeconds(25, 10, 15));

document.write('<br>'); document.write('<br>');
//9
let retransmitSecondsInTime = a => {
    let hh = 0;
    let mm = 0;
    let ss = 0;

    hh = parseInt(a / 3600);
    mm = parseInt((a % 3600) / 60);
    ss = parseInt(a % 60);

    return formatTime(hh, mm, ss);
}

document.write(retransmitSecondsInTime(64364));
document.write(retransmitSecondsInTime(32635));

document.write('<br>'); document.write('<br>');
//10
let theDifferenceBetweenDates = (a, b, c, a1, b1, c1) => {
    return retransmitSecondsInTime(getTimeInSeconds(a, b, c) - getTimeInSeconds(a1, b1, c1));
}

document.write(theDifferenceBetweenDates(13, 6, 21, 3, 8, 1));
