function reverseString(str) {
  var reversed = str.split("").reverse().join("");
  return reversed;
};

module.exports = reverseString;
