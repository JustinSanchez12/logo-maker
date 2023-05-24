const inquirer = require('inquirer');

// TODO: Create a Shape Class
class Shape {
    constructor(chars, text_colors, shape_colors) {
        this.chars = chars;
        this.text_colors = text_colors;
        this.shape_colors = shape_colors;
    }
}


// TODO: Create 3 Children Classes that is inherited by the Shape class (Circle, Triangle, Square)
class Triangle extends Shape {
    constructor(chars, text_colors, shape_colors, shape) {
        super(chars, text_colors, shape_colors);
        this.shape = shape;
    }
}

class Circle extends Shape {
    constructor(chars, text_colors, shape_colors, shape) {
        super(chars, text_colors, shape_colors);
        this.shape = shape;
    }
}

class Square extends Shape {
    constructor(chars, text_colors, shape_colors, shape) {
        super(chars, text_colors, shape_colors);
        this.shape = shape;
    }
}

// TODO: Generate SVG File
