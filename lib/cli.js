//Node module packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const { createDocument } = require('./document.js');

// Class to run the user prompt with inquirer
class CLI {
    run() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'chars',
                message: 'Please type your three characters: '
            },
            {
                type: 'input',
                name: 'text_colors',
                message: 'Please enter color or hexadecimal number for text: '
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Please enter the shape: ',
                choices: ['circle', 'triangle', 'square'],
            },
            {
                type: 'input',
                name: 'shape_colors',
                message: 'Please enter color or hexadecimal number for shape: '
            }
        ])
        .then((answers) =>{
           let shape;
           switch (answers.shape){
            case 'Circle':
                shape = new Circle(answers.char, answers.text_colors, answers.shape_colors);
                break;
            case 'Triangle':
                shape = new Circle(answers.char, answers.text_colors, answers.shape_colors);
                break;
            case 'Square':
                shape = new Circle(answers.char, answers.text_colors, answers.shape_colors);
                break;
           }
           //This will generate the SVG file
           const svgConent = createDocument(answers);
           const fileName = 'logo.svg';
           fs.writeFile(fileName, svgConent, (err) => {
            if(err){
                console.log(err);
            }
            else {
                console.log(`Generated ${fileName}`);
            }
           })
        })
        .catch((err) => {
            console.log(err);
        });
    }
}

module.exports = CLI;

