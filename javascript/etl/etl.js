function transform (obj) {
    var new_obj = {};
    for (var k in obj) {
        var v = obj[k];
        for (var e in v) {
            var new_k = v[e].toLowerCase();
            new_obj[new_k] = parseInt(k);
        }
    }
    return new_obj;
}

module.exports = transform;
