// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input', name: 'title', message: "Title of your project"},
    {type: 'input', name: 'description', message: "What is your project about?"},
    {type: 'input', name: 'installation', message: "What steps are required to install your project?"},
    {type: 'input', name: 'usage', message: "Provide examples of how to use your project."},
    {type: 'input', name: 'license', message: '"MIT", "Apache", "GPL", "None"'},
    {type: 'input', name: 'contribution', message: "Add any contributors to your project, or how others can contribute."},
    {type: 'input', name: 'testing', message: "If you are developing any tests, provide examples."},
    {type: 'input', name: 'username', message: "Provide your GitHub username."},
    {type: 'input', name: 'email', message: "Provide a valid email address."},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) { 
            console.log("ERROR! FILE NOT CREATED DUE TO INVALID DATA", err );    
        } else {
            console.log("File Created Sucessfully!");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    const generateMarkdown = require('./utils/generateMarkdown.js');
    const readMe = "./README.md";
    inquirer.prompt(questions).then((data) => {
        writeToFile(readMe, generateMarkdown(data));
    });
}

// Function call to initialize app
init();
