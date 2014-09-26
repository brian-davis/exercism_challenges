function dna (str) {
    'use strict';
    var str = str;
    var count = function (n) {
        var chars = str.split('');
        var result = 0;
        for (var i = 0; i < this.length; i++) {
            if (chars[i] === n) {
                result ++;
            }
        }
        return result;
    }
}

module.exports = dna;
