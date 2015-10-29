[![color-it](http://i.imgur.com/Mks97iZ.png)](#)

# color-it [![Support this project][donate-now]][paypal-donations]
Flat colors for your Node.js strings.

[![color-it](http://i.imgur.com/MsZii96.png)](#)

## Installation

```sh
$ npm i color-it
```

## Example

```js
// Dependencies
var ColorIt = require("color-it")
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

// All the available colors
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
```

## Documentation

### `ColorIt(text)`
Creates a new `ColorIt` instance.

Available methods:

 - `turquoise`
 - `emerland`
 - `peterRiver`
 - `amethyst`
 - `wetAsphalt`
 - `greenSea`
 - `nephritis`
 - `belizeHole`
 - `wisteria`
 - `midnightBlue`
 - `sunFlower`
 - `carrot`
 - `alizarin`
 - `clouds`
 - `concrete`
 - `orange`
 - `pumpkin`
 - `pomegranate`
 - `silver`
 - `asbestos`

Also, the following methods are aliased, for convenience:

 - `red` :arrow_right: `alizarin`
 - `yellow` :arrow_right: `sunFlower`
 - `green` :arrow_right: `emerland`
 - `blue` :arrow_right: `peterRiver`
 - `purple` :arrow_right: `amethyst`
 - `indigo` :arrow_right: `wisteria`
 - `gray` :arrow_right: `concrete`

If you need to change the background color, add the `Bg` suffix to the
method name (e.g. `orange` is for foreground, `orangeBg` is for
background).

#### Params
- **String** `text`: The text to color.

#### Return
- **ColorIt** The `ColorIt` instance.

### `toString()`
Convert the data to string (this can be called either manually or internally
just by concatenating the `ColorIt` instance with another string).

#### Return
- **String** Stringifies the data using ANSI styles.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015
[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md