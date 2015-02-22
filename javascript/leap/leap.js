function isLeapYear (yyyy) {
    if (yyyy % 4 === 0)
        if (yyyy % 100 == 0) {
            if (yyyy % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    else {
        return false;
    }
}

module.exports = isLeapYear;
