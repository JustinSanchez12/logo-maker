const Triangle = require('../lib/shape.js');
const Circle = require('../lib/shape.js');
const Square = require('../lib/shape.js');


//Test each class for render() to make sure it passes
//Check Activity 19 and 20
describe('Triangle', () => {
    //Example from canvas
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

describe('Circle', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toEqual('<circle cx="25" cy="75" r="20" fill="red"/>');
});

describe('Square', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toEqual('<rect x="10" y="10" width="10" height="10" fill="green"/> <rect x="60" y="10" rx="10" ry="10" width="10" height="10"/>')
});