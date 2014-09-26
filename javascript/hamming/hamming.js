function compute (strand_a, strand_b) {
    'use strict';
    var sorted = [strand_a, strand_b].sort(function (a, b) {
                    if (a.length > b.length) { return 1; }
                    else if (a.length > b.length) { return -1; }
                    else { return 0; }
                 }),
        count = 0,
        i = 0;

    for (i; i < sorted[0].length; i ++) {
        if (sorted[0][i] !== sorted[1][i]) { count += 1; }
    }

    return count;
}

module.exports.compute = compute;
