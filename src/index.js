module.exports = function reverse (n) {
    let num = n;
    let digits = num.toString().split("");
    let sorted = digits.reverse();
    let newNum = sorted.join("");
    let resultNum = parseInt(newNum);
    return resultNum;
}
