"use strict";

const colorIt = require("../lib")
    , iterateObj = require("iterate-object")
    ;

// Red on dark blue
console.log("Hello " + colorIt("World").orange().wetAsphaltBg() + "!");

// Rainbow!
console.log(
    colorIt("Flat Colors Rainbow: ").gray()
  + "\n" + colorIt(" ".repeat(7)).red().redBg() + " " + colorIt("Red").red()
  + "\n" + colorIt(" ".repeat(7)).orange().orangeBg() + " " + colorIt("Orange").orange()
  + "\n" + colorIt(" ".repeat(7)).yellow().yellowBg() + " " + colorIt("Yellow").yellow()
  + "\n" + colorIt(" ".repeat(7)).green().greenBg() + " " + colorIt("Green").green()
  + "\n" + colorIt(" ".repeat(7)).blue().blueBg() + " " + colorIt("Blue").blue()
  + "\n" + colorIt(" ".repeat(7)).purple().purpleBg() + " " + colorIt("Purple").purple()
  + "\n" + colorIt(" ".repeat(7)).indigo().indigoBg() + " " + colorIt("Indigo").indigo()
);

// All the available colors
var allColors = ""
  , newLine = false
  ;

iterateObj(colorIt.prototype, function (_, c) {
    allColors += colorIt("colorIt." + c + "()")[c]() + " ";
    if (!!(newLine = !newLine)) {
        allColors += "\n";
    }
});
console.log("All the possible colors:\n" + allColors);
