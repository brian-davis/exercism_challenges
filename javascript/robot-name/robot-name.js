function Robot () {
    'use strict';

    this.name = _reset();
    this.reset = function () {
        var new_name = _reset();
        this.name = new_name;
    }

    function _reset () {
        var name = '';

        for (var i = 0; i < 2; i++) {
            var letter = getRandomLetter();
            name += letter;
        }

        for (var i = 0; i < 3; i++) {
            var digit = getRandomDigit();
            name += digit;
        }

        return name;
    }

    function getRandomLetter () {
        var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
                        'H', 'I', 'J', 'K', 'L', 'M', 'N',
                        'O', 'P', 'Q', 'R', 'S', 'T', 'U',
                        'V', 'W', 'X', 'Y', 'Z']

        var randomIndex = getRandomInt(0, 25);
        return alphabet[randomIndex];
    }

    function getRandomDigit () {
        return getRandomInt(0, 9);
    }

    function getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
}

module.exports = Robot;
