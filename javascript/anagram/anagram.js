
function Anagram(string) {
  this.matchWord = string.toLowerCase()

  var matchLetters = prep(this.matchWord);
  this.matches = function (args) {
    // splat
    if (typeof args === 'string') {
      var argsArray = Array.prototype.slice.call(arguments);
    } else {
      var argsArray = args;
    }

    var result = [];
    for (i = 0; i < argsArray.length; i ++) {
      var currentWord = argsArray[i].toLowerCase()
      var currentLetters = prep(currentWord);
      if (currentWord === this.matchWord) {
        continue;
      } else if (currentLetters === matchLetters) {
        result.push(argsArray[i]);
      }
    }
    return result;
  }

  // private

  function prep(word) {
    return word.split('').sort().join()
  }
}

// no "new" calls in test suite
module.exports = function(string){
  return new Anagram(string);
}
