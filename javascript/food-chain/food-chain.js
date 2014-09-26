function Song() {
    'use strict';
    this.verse = function (n) {
        if (n === 1) {
            return "I know an old lady who swallowed a fly.\n" +
                    "I don't know why she swallowed the fly. Perhaps she'll die.\n";
        } else if (n === 2) {
            return "I know an old lady who swallowed a spider.\n" +
                   "It wriggled and jiggled and tickled inside her.\n" +
                   "She swallowed the spider to catch the fly.\n" +
                   "I don't know why she swallowed the fly. Perhaps she'll die.\n"
        } else if (n === 3) {
            return "I know an old lady who swallowed a bird.\n" +
                   "How absurd to swallow a bird!\n" +
                   "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
                   "She swallowed the spider to catch the fly.\n" +
                   "I don't know why she swallowed the fly. Perhaps she'll die.\n"
        } else if (n === 4) {
            return "I know an old lady who swallowed a cat.\n" +
                   "Imagine that, to swallow a cat!\n" +
                   "She swallowed the cat to catch the bird.\n" +
                   "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
                   "She swallowed the spider to catch the fly.\n" +
                   "I don't know why she swallowed the fly. " +
                   "Perhaps she'll die.\n"
        } else if (n === 5) {
            return "I know an old lady who swallowed a dog.\n" +
                   "What a hog, to swallow a dog!\n" +
                   "She swallowed the dog to catch the cat.\n" +
                   "She swallowed the cat to catch the bird.\n" +
                   "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
                   "She swallowed the spider to catch the fly.\n" +
                   "I don't know why she swallowed the fly. " +
                   "Perhaps she'll die.\n"
        } else if (n === 6) {
            return "I know an old lady who swallowed a goat.\n" +
                   "Just opened her throat and swallowed a goat!\n" +
                   "She swallowed the goat to catch the dog.\n" +
                   "She swallowed the dog to catch the cat.\n" +
                   "She swallowed the cat to catch the bird.\n" +
                   "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
                   "She swallowed the spider to catch the fly.\n" +
                   "I don't know why she swallowed the fly. " +
                   "Perhaps she'll die.\n"

        } else if (n === 7) {
            return "I know an old lady who swallowed a cow.\n" +
                   "I don't know how she swallowed a cow!\n" +
                   "She swallowed the cow to catch the goat.\n" +
                   "She swallowed the goat to catch the dog.\n" +
                   "She swallowed the dog to catch the cat.\n" +
                   "She swallowed the cat to catch the bird.\n" +
                   "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
                   "She swallowed the spider to catch the fly.\n" +
                   "I don't know why she swallowed the fly. " +
                   "Perhaps she'll die.\n"

        } else if (n === 8) {
            return "I know an old lady who swallowed a horse.\n" + "She's dead, of course!\n"
        }
    };

    this.verses = function (m, n) {
        var range = []
        for (var m = m; m <= n; m ++) { range.push(this.verse(m)); }
        var m = range.join("\n") + "\n";
        return m;
    }

    this.sing = function () {
        var song = this.verses(1, 8)
        return song;
    }
}
var s = new Song;
module.exports = s;
