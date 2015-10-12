var Couleurs = require("couleurs")
  , FlatColors = require("flat-colors")
  , IterateObject = require("iterate-object")
  ;

function ColorIt(text) {
    if (this.constructor !== ColorIt) {
        return new ColorIt(text);
    }
    this.styles = {};
    this.text = text;
}

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
  , indigo: "midnightBlue"
  , gray: "concrete"
};

IterateObject(ColorIt.aliases, function (c, n) {
    ColorIt.prototype[n] = ColorIt.prototype[c];
    ColorIt.prototype[n + "Bg"] = ColorIt.prototype[c + "Bg"];
});

module.exports = ColorIt;
