const inquirer = require('inquirer');
const fs = require('fs');
const index = require('../index.js')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    var badge = '';
    if (license === 'Apache License 2.0') {
        badge = '[![license](https://img.shields.io/badge/license-Apache-2.0-blue)](./LICENSE)'
    } else if (license === 'GNU General Public License') {
        badge = '[![license](https://img.shields.io/badge/license-GNU-grey)](./LICENSE)'
    } else if (license === 'MIT license') {
        '[![license](https://img.shields.io/badge/license-MIT-green)](./LICENSE)'
    } else {badge = ''}
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
var link = '';
if (license === 'Apache License 2.0') {
    link = 'https://www.apache.org/licenses/LICENSE-2.0'
} else if (license === 'GNU General Public License') {
    link = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
} else if (license === 'MIT license') {
    link = 'https://opensource.org/licenses/MIT'
} else {link = ''}
return link;

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    var licenseSection = '';
    if(license !== 'none') {
        licenseSection = `license: ${license}`
    }
    return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}
  ## ${renderLicenseSection(response.license)} ${renderLicenseBadge(response.license)}
  ### ${renderLicenseLink(response.license)}


  ## Table of Content
  ### [license](#license)
  ### [discription](#discrition)
  ### [installation](#instalation)
  ### [usage](#usage)
  ### [contribution](#contribution)
  ### [test](#test)
  ### [questions](#questions)

  ## discrition
  ### discrition of the app:
  ### ${response.discrition}

  ## instalation
  ### instalation directions are as follows:
  ### ${response.installation}

  ## usage
  ### directions for how to use the app are as follows:
  ### ${response.usage}

  ## contribution
  ### contribution guidelines are as follows:
  ### ${response.contribution}

  ## test
  ### how to test the app:
  ### ${response.test}

  ## questions
  ### if you have any questions here is my email and github username
  ### ${response.github} ${response.email}

`;
}

module.exports = generateMarkdown;