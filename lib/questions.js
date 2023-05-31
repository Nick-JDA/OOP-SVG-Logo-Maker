const validateColor = require("validate-color").default;

const questions = [{
            type: 'maxlength-input',
            name: 'logoText',
            message: 'Enter logo text (Maximum 3 characters',
            default: 'SVG',
            maxLength: 3,
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter color of logo text',
            default: 'yellow',
            validate: function (input) {
                if (validateColor(input)) {
                    return true
                } else {
                    return 'Not a valid color!'
                }
            }
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
            default: 'aqua',
            validate: function (input) {
                if (validateColor(input)) {
                    return true
                } else {
                    return 'Not a valid color!'
                }
            }
        },
        ];

    // Method to run inquirer prompt and instantiate Circle, Triangle, Square class and setting the text, textColor, shapeColor, then you can generate the SVG
    // Conditional if circle, shape = new Cricle() else if answers.shapeType === 'triangle' shape = new Triangle()





module.exports = questions;