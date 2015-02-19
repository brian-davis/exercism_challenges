function toRna (string) {
    'use strict';
    var complements = { 'G': 'C',
                        'C': 'G',
                        'T': 'A',
                        'A': 'U' };
    var chars = string.split('');
    var r = '';
    for (var c in chars) {
        r += complements[chars[c]];
    }
    return r;
}

module.exports = function(string) {
    return toRna(string);
}
