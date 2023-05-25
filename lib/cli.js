//Node module packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document.js');

// Refer to Mini Project Unit 10 

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
        .then(() => console.log("Generated logo.svg"))
        .catch((err) => {
            console.log(err);
        });
        //TODO: Create Write File that will create the svg document
    }
}

module.exports = CLI;

