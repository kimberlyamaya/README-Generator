// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
function questions () {  
    return inquirer.prompt ([
        {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
        },

        {
        type: "input",
        name: "description",
        message: "Enter a description for your project."
        }
    ])

    // KA - don't need this here, will use this down below when I call this function questions()
    .then (function (answers) {
        init(answers);
        console.log(answers.title)
        console.log(answers.description)
    })
};

// TODO: Create a function to write README file
function writeToFile(answers) {
    return `# ${answers.title}`
}

// TODO: Create a function to initialize app
function init(answers) {
    fs.writeFile('readME.md', writeToFile(answers), err => {
        if (err) throw err;
        console.log("you did it")
    })
}

// Function call to initialize app
questions();
