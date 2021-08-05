let reverse = function(num) {

    let n = num;

    let digits = n.toString().split("");

    let sorted = digits.reverse();

    let newNum = sorted.join("");

    let resultNum = parseInt(newNum);

    }
