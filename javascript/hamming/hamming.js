compute = function(strand_a, strand_b) {
  var sorted = [strand_a, strand_b].sort(function (a, b) {
                  if (a.length > b.length) {
                    return 1;
                  }
                  if (a.length > b.length) {
                    return -1;
                  }
                  return 0;
                });

  var count = 0;
  for (i = 0; i < sorted[0].length; i ++) {
    if (sorted[0][i] !== sorted[1][i]) {
      count += 1
    }
  }
  return count
}

module.exports.compute = compute
