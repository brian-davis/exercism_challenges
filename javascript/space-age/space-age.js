function SpaceAge (s) {
    'use strict';

    var earthYearInSeconds = 31557600;
    var orbitalPeriods = {
        'Earth': 1,
        'Mercury': 0.2408467,
        'Venus': 0.61519726,
        'Mars': 1.8808158,
        'Jupiter': 11.862615,
        'Saturn': 29.447498,
        'Uranus': 84.016846,
        'Neptune': 164.79132
    }

    var seconds = s;
    this.seconds = seconds;

    this.onEarth = function() {
        return planetYear('Earth');
    }

    this.onMercury = function() {
        return planetYear('Mercury');
    }

    this.onVenus = function() {
        return planetYear('Venus');
    }

    this.onMars = function() {
        return planetYear('Mars');
    }

    this.onJupiter = function() {
        return planetYear('Jupiter');
    }

    this.onSaturn = function() {
        return planetYear('Saturn');
    }

    this.onNeptune = function() {
        return planetYear('Neptune');
    }

    this.onUranus = function() {
        return planetYear('Uranus');
    }

    function planetYear(p) {
        return Number((seconds / (earthYearInSeconds * orbitalPeriods[p])).toFixed(2));
    }
}

module.exports = SpaceAge;
