var Gigasecond = function (date) {
    this.original_date  = date;

    var original_year  = this.original_date.getUTCFullYear();
    var original_month = this.original_date.getUTCMonth();
    var original_day   = this.original_date.getUTCDate();
    var original_UTC   = Date.UTC(original_year,
                                  original_month,
                                  original_day);

    var offset = (1000 * 20) +
                 (1000 * 60 * 13) +
                 (1000 * 60 * 60 * 6);

    var new_UTC_value = original_UTC +
                        (1000 * Math.pow(10, 9)) +
                        offset;

    var new_UTC = new Date(new_UTC_value);
    this.date = function () {
        return new_UTC;
    }
}

module.exports = Gigasecond;
