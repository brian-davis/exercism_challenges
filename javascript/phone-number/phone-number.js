function PhoneNumber (string) {
    'use strict';

    this.string = string;

    this.number = function () {
        return validDigits(integerCharacters(this.string));
    }

    this.areaCode = function () {
        return this.number().slice(0,3);
    }

    this.prefix_ = function () {
        return this.number().slice(3,6);
    }

    this.suffix = function () {
        return this.number().slice(6);
    }

    this.toString = function () {
        return '(' + this.areaCode() + ') ' +
                     this.prefix_() + '-' +
                     this.suffix();
    }

    function integerCharacters (string) {
        return string.replace(/[\-\s\(\)\.]/g,'');
    }

    function validDigits (string) {
        if (string.length === 10) {
            return string;
        } else if (string.length === 11 &&  string[0] === '1') {
            return string.slice(1);
        } else {
            return '0000000000';
        }
    }
}

module.exports = PhoneNumber;
