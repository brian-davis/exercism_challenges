function words(phrase) {
  'use strict';

  var matches = phrase.toLowerCase()
                      .match(/[\w'\u00C0-\u00FF\u0400-\u04FF]+/g);
  var counts = {};
  matches.forEach(function(m) {
    if (typeof counts[m] === 'function') {
      counts[m] = 1;
    } else if (counts[m] === undefined) {
      counts[m] = 1;
    } else {
      counts[m] += 1;
    }
  })
  return counts;
}

module.exports = words;
// console.log(words("constructor Constructor ¡Hola! ¿Qué tal? Привет!"));
