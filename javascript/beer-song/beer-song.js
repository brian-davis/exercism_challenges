function BeerSong() {
    'use strict';
    this.verse = function (n) {
        if (n === 0) {
            return "No more bottles of beer on the wall, no more bottles of beer.\n" +
                   "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
        } else {
            var str = '';
            str += n + ' ' + this.bottles(n) + ' of beer on the wall, ';
            str += n + ' ' + this.bottles(n) + ' of beer.' + "\n";
            str += 'Take ' + this.article(n) + ' down and pass it around, ';
            str += this.negative(n) + ' ' + this.bottles(n - 1)
            str += ' of beer on the wall.' + "\n";
            return str;
        }
    };

    this.negative = function (n) {
        if (n === 1) {
            return 'no more';
        } else {
            return (n - 1);
        }
    }

    this.article = function (n) {
        if (n === 1) {
            return 'it';
        } else {
            return 'one';
        }
    }

    this.bottles = function (n) {
        if (n === 1) {
            return 'bottle';
        } else {
            return 'bottles';
        }
    }

    this.sing = function (m, n) {
        var nn = (typeof n === "undefined") ? 1 : n;
        var sorted = [m, nn].sort();
        var short = sorted[0];
        var long = sorted[1];
        var range = [];
        for (var m = short; m <= long; m ++) {
          range.push(this.verse(m));
        }
        range.reverse();
        var m = range.join("\n");
        return m;
    }
}
var s = new BeerSong;
module.exports = s;
