// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Instillation] (#instillation)
* [Usage] (#usage)
* [License] (#license)
* [Contribution] (#contribution)
* [Tests] (#tests)
* [Questions] (#questions)
## Instilation
${data.instillation}
## Usage
${data.usage}
## License
${renderLicenseBadge(data.license)}
${data.license === "None" ? "License not provided." : `This project was created using the ${data.license} license!`}
## Contributing
${data.contribution}
## Tests
${data.testing}
## Username
${data.username}
## Email
${data.email}
`;
}

module.exports = generateMarkdown;
