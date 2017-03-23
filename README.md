
[![color-it](http://i.imgur.com/Mks97iZ.png)](#)

# color-it

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/color-it.svg)](https://www.npmjs.com/package/color-it) [![Downloads](https://img.shields.io/npm/dt/color-it.svg)](https://www.npmjs.com/package/color-it)

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`benchtable`](https://github.com/izuzak/benchtable) (by Ivan Zuzak)—Benchmark.js results in ascii tables for NodeJS
 - [`emoji-logger`](https://github.com/IonicaBizau/emoji-logger#readme)—Logging library based on flat colors and Emoji.
 - [`git-unsaved`](https://github.com/IonicaBizau/git-unsaved#readme)—Scan your projects directory for dirty git repositories.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
