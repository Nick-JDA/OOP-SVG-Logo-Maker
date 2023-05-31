const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const question = require('./lib/questions');
const { Circle, Square, Triangle } = require('./lib/shapes');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

question.run();