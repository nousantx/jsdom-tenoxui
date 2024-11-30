import { JSDOM } from 'jsdom'
import { MakeTenoxUI } from '@tenoxui/core'

const dom = new JSDOM('<!DOCTYPE html><p>Hello, world!</p>')

const document = dom.window.document
const element = document.querySelector('p')

new MakeTenoxUI({
  element,
  property: {
    text: 'color'
  }
}).applyStyles('text-red')

console.log(element.style)
