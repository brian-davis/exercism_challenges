function Grain () {
    this.square = function (n) {
        return Math.pow(2, n - 1);
    }

    this.total = function () {
        return Math.pow(2, 64) - 1;
    }
}

module.exports = Grain;
