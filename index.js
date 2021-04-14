const fs = require("fs");
const inquirer = require ("inquirer");
const generateMarkdown= require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "ProjectTitle",
        message: "what's the title of your project?"
    },
    {
        type: "list",
        name: "License",
        message: "what's the license for your project?",
        choices: ['MIT','Apache2.0','Mozilla Public License 2.0']
    },
    {
        type: "input",
        name: "Description",
        message: "Please add a discription to your project."
    },
    {
        type: "input",
        name: "Installation",
        message: "Please describe the installation instuctions of your project."
    },
    {
        type: "input",
        name: "Usage",
        message: "Please describe the usage information of your project."
    },
    {
        type: "input",
        name: "Contributing",
        message: "Please add the contribution guidelines to your project."
    },
    {
        type: "input",
        name: "Tests",
        message: "Please add the tests instructions to your project."
    },
    {
        type: "input",
        name: "GitHubUserName",
        message: "Please add your GitHub username."
    },
    {
        type: "input",
        name: "EmailAddress",
        message: "Please add your email address."
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err=>
        err ? console.log(err):console.log('successfully created README.md')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers=>{
        console.log(answers)
        // console.log(generateMarkdown(answers))
        writeToFile('README.md',generateMarkdown(answers))
    })
}

// Function call to initialize app
init();