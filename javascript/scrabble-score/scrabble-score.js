module.exports = function (str) {
    if ((typeof str != 'string') || (str.length === 0)) {
        return 0;
    } else {
        return score(str.toUpperCase());
    }

    function score (str) {
        var letterValues = {
            '1': ['A', 'E', 'I', 'O', 'U', 'L', 'N',
                  'R', 'S', 'T'],
            '2': ['D', 'G'],
            '3': ['B', 'C', 'M', 'P'],
            '4': ['F', 'H', 'V', 'W', 'Y'],
            '5': ['K'],
            '8': ['J', 'X'],
            '10': ['Q', 'Z']
        }

        var letters = str.split('');
        var score = 0;
        for (var l in letters) {
            for (var s in letterValues) {
                if (letterValues[s].indexOf(letters[l]) > -1) {
                    score += Number(s);
                }
            }
        }
        return score;
    }
}
