function isInteger() {
    return (arguments[0] ^ 0) === arguments[0];
  }
isInteger(5);
isInteger(5.1);