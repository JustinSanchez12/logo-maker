//Node module packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');


const { writeFile } = require('fs').promises;

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'chars',
            message: 'Please type your three characters: '
        },
        {
            type: 'input',
            name: 'text-colors',
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
            name: 'shape-colors',
            message: 'Please enter color or hexadecimal number for shape: '
        }
    ]);
};

const init = () => {
    promptUser()
        .then((answers) => writeFile('logo.svg', generateSVG(answers)))
        .then(() => console.log('Successfully generated logo.svg'))
        .catch((err) => console.log(err));
};

init();

