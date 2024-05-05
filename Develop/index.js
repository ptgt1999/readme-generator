// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please name your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What is the installation process for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Were there any other collaborators for your project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        choices: ['NONE','GNU AGPLv3', 'Mozilla Public License 2.0', 
        'Apache License 2.0', 'MIT', 'Boost Software License 1.0', 'Unilicensed'],
    },
    {
        type: 'input',
        name: 'features',
        message: 'What sort of features are included in your project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can other users contribute?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests are employed within the project?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
        fs.writeFile(fileName, generateMarkdown(data) , err =>
    err ? console.log(err) : console.log('READMEFILE has be successfully generated'))
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
