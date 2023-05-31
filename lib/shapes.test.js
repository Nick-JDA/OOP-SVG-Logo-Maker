const { Circle, Square, Triangle } = require('./shapes');

  describe('Circle', () => {
    it('should take in values and render svg', () => {
      const circle = new Circle('SVG', 'white', 'green');
      expect(circle.render()).toEqual(`<svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50%" cy="50%" r="100" fill="green" />
  <text x="150" y="100" font-weight="bold" font-size="60" text-anchor="middle" fill="white" dy="0.35em">SVG</text>
  Sorry, your browser does not support inline SVG.  
</svg>`)
    });
  });

describe('Square', () => {
    it('should take in values and render svg', () => {
      const square = new Square('VGS', 'black', 'yellow');
      expect(square.render()).toEqual(`<svg version"1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" width="200" height="200" fill="yellow" />
  <text x="150" y="100" font-weight="bold" font-size="60"text-anchor="middle"fill="black"dy="0.35em">VGS</text>
  Sorry, your browser does not support inline SVG.  
</svg>`)
    });
  });

describe('Triangle', () => {
    it('should take in values and render svg', () => {
      const triangle = new Triangle('GSV', 'purple', 'orange');
      expect(triangle.render()).toEqual(`<svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150,0 300,300 0,300" fill="orange" />
   <text x="150" y="125" font-weight="bold" font-size="60"text-anchor="middle"fill="purple"dy="0.35em">GSV</text>
  Sorry, your browser does not support inline SVG.
</svg>`)
    });
  });
