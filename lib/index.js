var Couleurs = require("couleurs")
  , FlatColors = require("flat-colors")
  , IterateObject = require("iterate-object")
  ;

function ColorIt(text) {
    if (this.constructor !== ColorIt) {
        return new ColorIt(text);
    }
    this.styles = [];
    this.text = text;
}

ColorIt.prototype.toString = function () {
    var output = this.text;
    IterateObject(this.styles, function (style) {
        output = style.type === "fg" ?
    });
};

// Red, Orange, Yellow, Green, Blue, Indigo, Purple
IterateObject(FlatColors._, function (color, name) {
    ColorIt.prototype[name] = function () {
        this.styles.push({
            type: "fg"
          , name: name
          , color: color
        });
    };
    ColorIt.prototype[name + "Bg"] = function () {
        this.styles.push({
            type: "bg"
          , name: name
          , color: color
        });
    };
});
