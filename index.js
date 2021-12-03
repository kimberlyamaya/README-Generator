// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { join } = require('path');

// TODO: Create an array of questions for user input
function questions () {  
    return inquirer.prompt ([
        {
        // title
        type: "input",
        name: "title",
        message: "What is the title of your project?"
        },

        // description
        {
        type: "input",
        name: "description",
        message: "Enter a detailed description for your project"
        },

        // table of contents
        {
        type: "input",
        name: "tableOfContents",
        message: "Enter a table of contents item"
        },
        {
        type: "confirm",
        name: "tableofContentsRepeat",
        message: "Do you have another table of contents item to list?",
        default: false
        // repeat until no more table of content items
        },

        // installation
        {
        type: "input",
        name: "installationInstructions",
        message: "Enter installation instructions step by step"
        },
        {
        type: "confirm",
        name: "installationInstructionsRepeat",
        message: "Do you have more instructions to write?"
        },

        // usage
        {
        type: "input",
        name: "usageInstructions",
        message: "Enter usage instructions step by step"
        },
        {
        type: "input",
        name: "usageImage",
        message: "Enter image name here including file extention. Make sure images are stored in the assets/images folder"
        // drop the instructional link here
        // add filepath to insert in images to the html wrapped around this answer
        },
        {
        type: "confirm",
        name: "usageInstructionRepeat",
        message: "Do you have more instructions to write?",
        default: false
        // prompt to add image after each instruction is written, looping until no more instructions to enter
        },
        {
        type: "confirm",
        name: "usageImageRepeat",
        message: "Do you have an image to include with this instruction?",
        default: false
        // prompt to add image after each instruction is written, looping until no more instructions to enter
        },

        // license
        // Enter license.txt here, in the answer function

        // contributing
        // Enter contribution here, in the answer function
        {
        type: "input",
        name: "contributingGitHubIssuesUsername",
        message: "Enter your github username"
        },
        {
        type: "input",
        name: "contributingGitHubIssuesRepoName",
        message: "Enter your github repo name"
        },

        // tests
        {
        type: "input",
        name: "testInstruction",
        message: "Enter instructions on how to run tests step by step"
        },
        {
        type: "confirm",
        name: "testInstructionRepeat",
        message: "Do you have more instructions to write?",
        default: false
        // repeat until no more test instructions
        },

        // questions
        {
        type: "input",
        name: "FAQQuestion",
        message: "Enter a question for your FAQ section"
        },
        {
        type: "input",
        name: "FAQAnswer",
        message: "Enter your answer"
        },
        {
        type: "confirm",
        name: "FAQRepeat",
        message: "Do you have more FAQ questions to enter?",
        default: false
         // prompt for FAQAnswer after each FAQQuestion, looping until no more FAQQuestions to ask
        },

        // editors
        {
        type: "input",
        name: "editors",
        message: "List editor names"
        }
    ])

    
    .then (function (answers) {
        init(answers);
        //console.log(answers.title)
        //console.log(answers.description)
    })
};


// TODO: Create a function to write README file
function writeToFile(answers) {
    return `# ${answers.title}

## ${answers.description}`

// right after usageImageRepeat put License, pull License from Lincense.txt
// then put the contributing text
// contributing text
// Find issues to correct in the issues tab on github, click here to view
// example of the link https://github.com/kimberlyamaya/README-Generator/issues
// to work/add to this project
// 1. fork the repository
// 2. make the fix
// 3. submit a pull request


// add editors
}

// TODO: Create a function to initialize app
function init(answers) {
    fs.writeFile('readME.md', writeToFile(answers), err => {
        if (err) throw err;
        //console.log("you did it")
    })
}

// Function call to initialize app
questions();
