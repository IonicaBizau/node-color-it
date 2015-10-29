// Dependencies
var Couleurs = require("couleurs")
  , FlatColors = require("flat-colors")
  , IterateObject = require("iterate-object")
  ;

/**
 * ColorIt
 * Creates a new `ColorIt` instance.
 *
 * Available methods:
 *
 *  - `turquoise`
 *  - `emerland`
 *  - `peterRiver`
 *  - `amethyst`
 *  - `wetAsphalt`
 *  - `greenSea`
 *  - `nephritis`
 *  - `belizeHole`
 *  - `wisteria`
 *  - `midnightBlue`
 *  - `sunFlower`
 *  - `carrot`
 *  - `alizarin`
 *  - `clouds`
 *  - `concrete`
 *  - `orange`
 *  - `pumpkin`
 *  - `pomegranate`
 *  - `silver`
 *  - `asbestos`
 *
 * Also, the following methods are aliased, for convenience:
 *
 *  - `red` :arrow_right: `alizarin`
 *  - `yellow` :arrow_right: `sunFlower`
 *  - `green` :arrow_right: `emerland`
 *  - `blue` :arrow_right: `peterRiver`
 *  - `purple` :arrow_right: `amethyst`
 *  - `indigo` :arrow_right: `wisteria`
 *  - `gray` :arrow_right: `concrete`
 *
 * If you need to change the background color, add the `Bg` suffix to the
 * method name (e.g. `orange` is for foreground, `orangeBg` is for
 * background).
 *
 * @name ColorIt
 * @function
 * @param {String} text The text to color.
 * @return {ColorIt} The `ColorIt` instance.
 */
function ColorIt(text) {
    if (this.constructor !== ColorIt) {
        return new ColorIt(text);
    }
    this.styles = {};
    this.text = text;
}

/**
 * toString
 * Convert the data to string (this can be called either manually or internally
 * just by concatenating the `ColorIt` instance with another string).
 *
 * @name toString
 * @function
 * @return {String} Stringifies the data using ANSI styles.
 */
ColorIt.prototype.toString = function () {
    var output = this.text;
    IterateObject(this.styles, function (color, type) {
        output = Couleurs[type](output, color);
    });
    return output;
};

// Red, Orange, Yellow, Green, Blue, Indigo, Purple
IterateObject(FlatColors._, function (color, name) {

    ColorIt.prototype[name] = function () {
        this.styles.fg = color;
        return this;
    };

    ColorIt.prototype[name + "Bg"] = function () {
        this.styles.bg = color;
        return this;
    };
});

// Aliases
ColorIt.aliases = {
    red: "alizarin"
  , yellow: "sunFlower"
  , green: "emerland"
  , blue: "peterRiver"
  , purple: "amethyst"
  , indigo: "wisteria"
  , gray: "concrete"
};

IterateObject(ColorIt.aliases, function (c, n) {
    ColorIt.prototype[n] = ColorIt.prototype[c];
    ColorIt.prototype[n + "Bg"] = ColorIt.prototype[c + "Bg"];
});

module.exports = ColorIt;
