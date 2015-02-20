function School () {
    'use strict';

    var roster_ = {};

    this.roster = function () {
        return roster_;
    }

    this.add = function (name, grade) {
        if (typeof roster_[grade] === 'undefined') {
            roster_[grade] = [];
        }
        roster_[grade].push(name);
        roster_[grade].sort();
        return roster_[grade];
    }

    this.grade = function (grade) {
        if (typeof roster_[grade] === 'undefined') {
            return [];
        }
        return roster_[grade].sort();
    }
}

module.exports = School;
