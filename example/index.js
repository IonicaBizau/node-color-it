// Dependencies
var ColorIt = require("../lib")
  , IterateObject = require("iterate-object")
  ;

// Red on dark blue
console.log("Hello " + ColorIt("World").orange().wetAsphaltBg() + "!");

// Rainbow!
console.log(
    ColorIt("Flat Colors Rainbow: ").gray()
  + "\n" + ColorIt(" ".repeat(7)).red().redBg() + " " + ColorIt("Red").red()
  + "\n" + ColorIt(" ".repeat(7)).orange().orangeBg() + " " + ColorIt("Orange").orange()
  + "\n" + ColorIt(" ".repeat(7)).yellow().yellowBg() + " " + ColorIt("Yellow").yellow()
  + "\n" + ColorIt(" ".repeat(7)).green().greenBg() + " " + ColorIt("Green").green()
  + "\n" + ColorIt(" ".repeat(7)).blue().blueBg() + " " + ColorIt("Blue").blue()
  + "\n" + ColorIt(" ".repeat(7)).purple().purpleBg() + " " + ColorIt("Purple").purple()
  + "\n" + ColorIt(" ".repeat(7)).indigo().indigoBg() + " " + ColorIt("Indigo").indigo()
);

var allColors = ""
  , newLine = false
  ;
IterateObject(ColorIt.prototype, function (_, c) {
    allColors += ColorIt("ColorIt." + c + "()")[c]() + " ";
    if (!!(newLine = !newLine)) {
        allColors += "\n";
    }
});
console.log("All the possible colors:\n" + allColors);
