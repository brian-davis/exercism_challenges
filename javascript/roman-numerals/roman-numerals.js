Array.prototype.includes = function (el) {
    return (this.indexOf(el) > -1);
}

Object.prototype.keys = function () {
    var new_obj = [];
    for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
            new_obj.push(prop);
        }
    }
    return new_obj;
}

Object.prototype.invert = function () {
    var new_obj = {};
    for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
            new_obj[this[prop]] = prop;
        }
    }
    return new_obj;
};

String.prototype.times = function (n) {
    var result = ''
    for (var i = 0; i < n; i++) {
        result += this
    }
    return result
}

function romanNumber (n) {
    var sn = String(n);
    var romanToArabic = { 'M'  : '1000',
                          'CM' : '900',
                          'D'  : '500',
                          'CD' : '400',
                          'C'  : '100',
                          'XC' : '90',
                          'L'  : '50',
                          'XL' : '40',
                          'X'  : '10',
                          'IX' : '9',
                          'V'  : '5',
                          'IV' : '4',
                          'I'  : '1' }
    var lookup = find(n);
    var roman_letter = lookup[0];
    var roman_value = Number(lookup[1]);

    if (roman_value === n) {
        return roman_letter;
    } else {
        var q = (roman_value % n);
        var m = n - q;

        if (roman_value === n) {
            return roman_letter;
        } else {
            if (m === 0) {
                return roman_letter.times(q);
            } else {
                return roman_letter + romanNumber(m);
            }
        }
    }

    function find (n) {
        var rtak = romanToArabic.keys()

        for (var i = 0; i < rtak.length; i++) {
            var key = rtak[i];
            var val = romanToArabic[key];
            if (Number(val) <= n) { return [key, val]; }
        }
    }
}

module.exports = romanNumber;
