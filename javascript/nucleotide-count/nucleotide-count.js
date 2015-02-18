function Dna (string) {
    'use strict';
    var str = string;
    if (typeof str === 'undefined') {
        str = '';
    } else if ( /[^ATCG]/.test(str) ) {
        throw new Error('Invalid Nucleotide');
    }

    this.count = function (n) {
        var chars = str.split('');
        var result = 0;
        for (var i = 0; i < chars.length; i++) {
            if (chars[i] === n) {
                result ++;
            }
        }
        return result;
    }

    this.histogram = function () {
        var nucleotidesHistogram = { 'A': 0,
                                     'T': 0,
                                     'C': 0,
                                     'G': 0 };
        for (var n in nucleotidesHistogram) {
            nucleotidesHistogram[n] = this.count(n);
        }
        return nucleotidesHistogram;
    }
}

module.exports = function(string) {
    return new Dna(string);
}
