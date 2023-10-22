// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [

//project title
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},

//project description
{
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project.',
},

//project installation
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
},

//project usage
{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.',
},

//usage screenshot
{
    type: 'input',
    name: 'screenshot',
    message: 'Include screenshots as needed:',
},

//license list
{
    type: 'list',
    name: 'license',
    message: 'What license did you use?',
},

//project contributions
{
    type: 'input',
    name: 'contributing',
    message: 'List your collaborators, if any, with links to their GitHub profiles:',
},

//project testing
{
    type: 'input',
    name: 'tests',
    message: 'Go the extra mile and write tests for your application:',
},

//github - questions
{
    type: 'input',
    name: 'questions',
    message: '',//add Questions? Reach out to me at @GitHub profile
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
