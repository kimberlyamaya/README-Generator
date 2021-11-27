// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
//const questions = [];
// KA - create the array of questions here, do I include object brackets around each question? Do I need to include type and name of each? Or
// KA - is that only for prompts?
inquirer.prompt ([
    {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
    }
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
