# hinata [![NPM version](https://img.shields.io/npm/v/hinata.svg)](https://npmjs.com/package/hinata) [![NPM downloads](https://img.shields.io/npm/dm/hinata.svg)](https://npmjs.com/package/hinata) [![Build Status](https://img.shields.io/circleci/project/egoist/hinata/master.svg)](https://circleci.com/gh/egoist/hinata) 

> Your cli spinner which like a marquee.

![gif](http://ooo.0o0.ooo/2016/03/03/56d90169c39f1.gif)

## Install

```js
$ npm install --save hinata
```

## Usage

```js
const Hinata = require('hinata')

const hinata = new Hinata({char: '❤', spacing: 2})

hinata.start()

setTimeout(() => {
  // update loading text
  hinata.text = 'loading something'
}, 2000)

setTimeout(() => {
  // update loading character
  hinata.char = '.'
  // update character spacing
  hinata.spacing = 0
}, 3000)

setTimeout(() => {
  hinata.stop()
}, 10000)
```

## API

### hinata([options])

`options.text` default `''`

Placeholder for loading text, eg: `Loading` in `Loading ...`

`options.char` default `.`

Loading character, eg: `❤` in `❤ ❤ ❤ loading webpack`

`options.length` default `3`

How many time a loading character should repeat itself.

`options.color` default `false`

If set to be true, spinner uses your color instead of a random color.

`options.spacing` default `0`

How many spaces between each loading character.

`options.timeout` default `100`

The timeout to update the spinner.

`options.prepend` default `false`

Show loading text at the beginning of the spinner.

## License

MIT © [EGOIST](https://github.com/egoist)
