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
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;