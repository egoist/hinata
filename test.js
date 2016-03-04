var Hinata = require('./')

var hinata = new Hinata()

hinata.start()

setTimeout(function () {
  hinata.text = 'loading lodash'
}, 2000)

setTimeout(function () {
  hinata.char = '❤'
  hinata.spacing = 2
  hinata.text = 'loading react'
}, 4000)

setTimeout(function () {
  hinata.text = 'loading webpack'
}, 6000)

setTimeout(function () {
  hinata.text = 'loading lunch'
}, 8000)

setTimeout(function () {
  hinata.stop()
}, 10000)
