'use strict'
var chalk = require('chalk')

function randomColor(text) {
  var colors = [
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'bold'
  ]
  var color = colors[Math.round(Math.random() * (colors.length - 1))]
  return chalk[color](text)
}

function replaceCharAt(str, index, value) {
  return str.substr(0, index) + value + str.substr(index + 1)
}

function Hinata(opts) {
  opts = opts || {}
  this.text = opts.text || ''
  this.char = opts.char || '.'
  this.length = opts.length || 3
  this.color = opts.color
  this.spacing = opts.spacing || 0
  this.timeout = opts.timeout || 100
  this.prepend = opts.prepend
  this.stream = process.stdout
}

Hinata.prototype.start = function () {
  var index = 0
  this.loop = setInterval(function () {
    var dots = this.char.repeat(this.length)
    var replaceDot = this.color ? chalk[this.color] : randomColor(this.char)
    dots = replaceCharAt(dots, index, replaceDot)
    dots = dots.split(this.char).join(this.char + ' '.repeat(this.spacing))
    var text = this.prepend ? this.text + dots : dots + this.text
    this.stream.clearLine()
    this.stream.write('\r' + text)
    if (index === this.length - 1) {
      index = 0
    } else {
      index++
    }
  }.bind(this), this.timeout)
}

Hinata.prototype.stop = function () {
  clearInterval(this.loop)
  this.stream.clearLine()
  this.stream.cursorTo(0)
  this.loop = null
}

module.exports = Hinata
