//Shape class
class Shape {
    constructor(chars, text_colors, shape_colors) {
        this.chars = chars;
        this.text_colors = text_colors;
        this.shape_colors = shape_colors;
    }
}


//Children classes
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
//Export the classes
module.exports = {Triangle, Square, Circle};