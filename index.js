// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('please enter your title')
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'discription',
        message: 'please enter a discription of your project',
        validate: dicriptionInput => {
            if (dicriptionInput) {
                return true;
            } else {
                console.log('please enter a discrition')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'please enter installation instructions for your project',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('please enter installation instructions')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'please enter usage information for your project',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('please enter usage information')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'please enter contribution guidelines for your project',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('please enter contribution guidelines')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'please enter test instructions your project',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('please enter test instructions')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'licens',
        choices: ['none', 'Apache License 2.0', 'GNU General Public License', 'MIT License'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
}

// Function call to initialize app
init();