const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const questions = require('./lib/questions');
const { Circle, Square, Triangle } = require('./lib/shapes');
const fs = require('fs');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

function writeToFile() {
    inquirer.prompt(questions).then((data) => {
        console.log(data)
        let logoShape;
        switch (data.shapeType) {
            case 'circle':
                logoShape = new Circle(data.logoText, data.textColor, data.shapeColor)
                break;
            case 'triangle':
                logoShape = new Triangle(data.logoText, data.textColor, data.shapeColor)
                break;
            case 'square':
                logoShape = new Square(data.logoText, data.textColor, data.shapeColor)
                break;
        }
        let logoFinal = logoShape.render()
        fs.writeFile("./examples/logo.svg", logoFinal, (error) => {
            error ? console.log('error') : console.log('Logo Generated!');
        })
    })
}
writeToFile();
