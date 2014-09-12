function Bob() {
  'use strict';

  this.hey = function(sentence) {
    if (isSilent(sentence)) {
      return "Fine. Be that way!";
    } else if (isYelling(sentence)) {
      return "Woah, chill out!";
    } else if (isQuestion(sentence)) {
      return "Sure.";
    } else {
      return 'Whatever.';
    }
  };

  // private

  function isSilent(sentence) {
    return sentence.replace(/\s+/g, '') === "";
  }

  function isYelling(sentence) {
    return sentence.toUpperCase() === sentence && /[A-Z]/.test(sentence);
  }

  function isQuestion(sentence) {
    return sentence[sentence.length - 1] === "?";
  }
}

module.exports = Bob;
