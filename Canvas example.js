//  program to overlay images using `canvas`
//
//  Below snippet is an example where some text is ovelayed on top of the input image.
//  to add more layers, introduce more functions similar to `sign(text)` and invoke them in the order of background layer to foreground layer to add them to `canvas.toBuffer`.
//  finally write content of canvas.toBuffer to disk 

const fs = require('fs')
const { createCanvas, loadImage } = require('canvas')

const width = 1000
const height = 1000

const canvas = createCanvas(width, height)
const context = canvas.getContext('2d')

loadImage('E:\\some imput image.png').then(image => {
  context.drawImage(image, 10, 10, 1000, 1000)
  const text = 'Hello, World!'
  sign(text)
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync('./test.png', buffer)
})

function sign(text) {
    context.fillStyle = "#ffffff"
    //ctx.font = "[ [ <'font-style'> || <font-variant-css2> || <'font-weight'> || <font-stretch-css3> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar"`
    context.font = "italic bold 60pt Verdana"
    // ctx.font = "italic 90pt 'Roboto Condensed'";
    context.textBaseline = "top"
    context.textAlign = "left"
    context.save()
    context.translate(40, 860)
    // ctx.rotate(-0.5*Math.PI);
    context.shadowColor = "#444444"
    context.shadowOffsetX = 5
    context.shadowOffsetY = 5
    context.fillText(text, 0, 0)
    context.restore()
}
