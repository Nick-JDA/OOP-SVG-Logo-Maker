


class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shapes {
    render() {
        return `<svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50%" cy="50%" r="100" fill="${this.shapeColor}" />
  <text x="150" y="100" font-weight="bold" font-size="60" text-anchor="middle" fill="${this.textColor}" dy="0.35em">${this.text}</text>
  Sorry, your browser does not support inline SVG.  
</svg>`
    }
}

class Triangle extends Shapes {
    render() {
        return `<svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150,0 300,300 0,300" fill="${this.shapeColor}" />
   <text x="150" y="125" font-weight="bold" font-size="60"text-anchor="middle"fill="${this.textColor}"dy="0.35em">${this.text}</text>
  Sorry, your browser does not support inline SVG.
</svg>`
    }
}

class Square extends Shapes {
    render() {
        return `<svg version"1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" width="200" height="200" fill="${this.shapeColor}" />
  <text x="150" y="100" font-weight="bold" font-size="60"text-anchor="middle"fill="${this.textColor}"dy="0.35em">${this.text}</text>
  Sorry, your browser does not support inline SVG.  
</svg>`
    }
}

module.exports = {Circle, Triangle, Square};
