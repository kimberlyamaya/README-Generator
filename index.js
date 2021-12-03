// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { join } = require('path');

// TODO: Create an array of questions for user input
function questions () {  
    return inquirer.prompt ([
        // title
        {
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
        /*{
        type: "input",
        name: "tableOfContentItem",
        message: "Enter a table of contents item"
        },
        {
        type: "confirm",
        name: "tableofContentItemRepeat",
        message: "Do you have another table of contents item to list?",
        default: false
        // repeat until no more table of content items
        },*/

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
        type: "confirm",
        name: "usageImageRepeat",
        message: "Do you have an image to include with this instruction?",
        default: false
        // prompt to add image after each instruction is written, looping until no more instructions to enter
        },
        {
        type: "input",
        name: "usageImages",
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
        }

        // license
        // Enter license.txt here, in the answer function
    ])

    
    .then (function (answers) {
        init(answers);
        //console.log(answers.title)
        //console.log(answers.description)
    })
};


// TODO: Create a function to write README file
function writeToFile(answers) {
  // title
  return `# ${answers.title}
 
  ## Description
  ${answers.description}

  ## Table of Contents
  [Installation](##Installation)  
  [Usage](##Usage)  
  [Contributing](##Contributing)   
  [Tests](##Tests)  
  [Questions](##Questions)  
  [License](##License) 
  
  ## Installation
  ${answers.installationInstructions}  
  
  ## Usage
  ${answers.usageInstructions}  
  ${answers.usageImages}  
  
  ## Contributing
  
  ### Add to Project
  To work on or add to this project follow these steps
  1. Fork the repository
  2. Add you changes
  3. Submit a pull request for approval
  
  ### Issues
  [Link to GitHub Issues](https://github.com/${answers.contributingGitHubIssuesUsername}/${answers.contributingGitHubIssuesRepoName}/issues)   

  ## Tests
  ${answers.testInstruction}

  ## Questions

  ### FAQ
  ${answers.FAQQuestion}  
  ${answers.FAQAnswer}

  ## License
  [Click here to view License](license.txt)`

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
