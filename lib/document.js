const {Circle, Triangle, Square} = require('./shape.js');

function createDocument(shape) {
    let shapeContent = '';
//Switch statement is due to user choosing which shape the logo should be
    switch (shape.constructor) {
        case Circle:
            shapeContent = `<circle cx="25" cy="75" r="20" fill="${shape.shape_colors}/>`;
            break;
        case Triangle:
            shapeContent = `<polygon points="150, 18 244, 182 56, 182" fill="${shape.shape_colors}"`;
            break;
        case Square: 
            shapeContent = `<rect x="50" y="50" width="200" height="100" fill="${shape.shape_colors}" />`;
            break;
    }
//Returns the content of the SVG file
return `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" fill="white" />

${shapeContent}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.text_colors}">${shape.chars}</text>

</svg>`;

};

module.exports = { createDocument };