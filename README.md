
[![color-it](http://i.imgur.com/Mks97iZ.png)](#)

# color-it

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/color-it.svg)](https://www.npmjs.com/package/color-it) [![Downloads](https://img.shields.io/npm/dt/color-it.svg)](https://www.npmjs.com/package/color-it) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Flat colors for your Node.js strings.

This library uses the flat colors taken from [flatuicolors.com](http://flatuicolors.com). For low-level libraries, check out [`flat-colors.js`](https://github.com/IonicaBizau/flat-colors.js) and [`node-couleurs`](https://github.com/IonicaBizau/node-couleurs).

[![color-it](http://i.imgur.com/MsZii96.png)](#)

## :cloud: Installation

```sh
$ npm i --save color-it
```


## :clipboard: Example



```js
const colorIt = require("color-it")
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
```

## :memo: Documentation


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



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`benchtable`](https://github.com/izuzak/benchtable) (by Ivan Zuzak)—Benchmark.js results in ascii tables for NodeJS
 - [`emoji-logger`](https://github.com/IonicaBizau/emoji-logger#readme)—Logging library based on flat colors and Emoji.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
