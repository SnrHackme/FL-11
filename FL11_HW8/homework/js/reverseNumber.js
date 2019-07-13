    function reverseNumber(num) {
    let neg;
    let revNum = 0;
    if(num < 0) {
    neg = true;
    num = num * -1;
    }
    while (num) {
        revNum = (revNum * 10) + (num % 10);
        num = Math.floor(num / 10);
      }
    if(neg) {
        return revNum * -1;
    } else {
        return revNum;
    }
}
reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);
