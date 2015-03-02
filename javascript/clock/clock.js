function Clock(hour, minute) {
    if (typeof minute === 'undefined') {
        this.minute = 0;
    } else {
        this.minute = minute;
    }

    this.hour = hour;

    if ((this.hour === 24) && (this.minute > 0)) { this.hour = 0; }
    while (this.hour < 0) {
        this.hour = this.hour + 24;
    }

    this.toString = function () {
        return padDigits(this.hour) + ':' + padDigits(this.minute);
    }

    this.plus = function (n) {
        this.minute += n;
        var count = 0;
        while (this.minute >= 60) {
            count += 1;
            this.minute -= 60;
        }
        this.hour += count;
        return new Clock(this.hour, this.minute);
    }

    this.minus = function (n) {
        this.minute -= n;
        var count = 0;
        while (this.minute < 0) {
            count += 1;
            this.minute += 60;
        }
        this.hour -= count;
        return new Clock(this.hour, this.minute);
    }

    this.equals = function (other) {
        return ((this.hour === other.hour) && (this.minute === other.minute));
    }

    function padDigits (n) {
        var paddedDigits;
        if (n <= 9) {
            paddedDigits = '0' + String(n);
        } else {
            paddedDigits = String(n);
        }
        return paddedDigits
    }
}

module.exports = {
    at: function(h, m) {
        return new Clock(h, m);
    }
}
