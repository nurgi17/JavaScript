'use strict';
class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv(text) {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent = text;
        let param = `height:${this.height}px; width:${this.width}; background-color:${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
        div.style.cssText = param;
    }
}

let obj = new Options(100, 50, 'red', 16, 'center');

obj.createDiv('Hello');