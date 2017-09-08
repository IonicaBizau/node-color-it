## Documentation

You can see below the API reference of this module.

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

