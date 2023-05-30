const inquirer = require('inquirer');

class QUESTIONS {
    constructor() {
        inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoText',
            message: 'Enter logo text (Maximum 3 characters',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter color of logo text',
        },
        {
            type: 'list',
            name: 'shapeType',
            message: 'Choose a logo shape type',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter color of logo shape',
        },
    ])
    .then()
    }
    // Method to run inquirer prompt and instantiate Circle, Triangle, Square class and setting the text, textColor, shapeColor, then you can generate the SVG
    // Conditional if circle, shape = new Cricle() else if answers.shapeType === 'triangle' shape = new Triangle()
}





module.exports = QUESTIONS;