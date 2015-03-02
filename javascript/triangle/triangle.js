var Triangle = function (a, b, c) {
    var a = a, b = b, c = c;
    var sides = [a, b, c];

    this.kind = function () {
        if (invalid()) {
            throw new Error('Invalid Triangle');
        } else if (equilateral()) {
            return 'equilateral';
        } else if (isoceles()) {
            return 'isosceles';
        } else if (scalene()) {
            return 'scalene';
        }
    }

    function invalid () {
        return (invalidValue() || invalidEquality());
    }

    function invalidValue () {
        return (a === 0 || b === 0 || c === 0);
    }

    function invalidEquality () {
        return ((a + b <= c) || (b + c <= a) || (c + a <= b))
    }

    function equilateral () {
        return ((a === b) && (a === c));
    }

    function isoceles () {
        return ((a === b) || (b === c) || (c === a));
    }

    function scalene () {
        return ((a !== b) && (b !== c) && (c !== a));
    }
}

module.exports = Triangle;
