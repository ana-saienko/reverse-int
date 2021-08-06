let reverse = function(num) {

    return +num
    .toString()
    .split('')
    .reverse()
    .join('')

}

/* 
function dividing(num) {

    let digit;

    while(num) {
      digit = num % 10;
      num = Math.floor(num / 10);

    }
  }

  let n = num;

  let digits = n.toString().split("");
  
  let sorted = digits.reverse();
  
  let newNum = sorted.join("");
  
  let resultNum = parseInt(newNum);
  
  return resultNum;

  */

  /* 
    let digit;
    let resultDiv;

    while(num) {
      digit = num % 10;
      resultDiv = num = Math.floor(num / 10);
    }

    console.log(resultDiv)
 */