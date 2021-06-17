// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache-2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license === "MPL-2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  return "";
};

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache-2.0") {
    return `[Apache-2.0 Link](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === "MIT") {
    return `[MIT Link](https://opensource.org/licenses/MIT)`
  }
  if (license === "MPL-2.0") {
    return `[MPL-2.0 Link](https://opensource.org/licenses/MPL-2.0)`
  }
  return "";
};

// Function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.license);
  // returns the title of the project, using ${data.input} it pulls the information from index.js that the user inputs and puts it underneath the correct title
  // questions section lists github standard site with user input to show url to the user GitHub page and email as well
  return `# ${data.title}


## Description
${data.description}

## License Badge and Link (if applicable)
${renderLicenseBadge(data.license)} <br />
${renderLicenseLink(data.license)}

  ## Table of Contents
- [Description](https://github.com/${data.githubUser}/professional-readme/blob/main/develop/README.md#description "Description")
- [Installation](https://github.com/${data.githubUser}/professional-readme/blob/main/develop/README.md#installation "Installation")
- [Usage](https://github.com/${data.githubUser}/professional-readme/blob/main/develop/README.md#usage "Usage")
- [Contributing](https://github.com/${data.githubUser}/professional-readme/blob/main/develop/README.md#contributing "Contributing")
- [Tests](https://github.com/${data.githubUser}/professional-readme/blob/main/develop/README.md#tests "Tests")
- [License](https://github.com/${data.githubUser}/professional-readme/blob/main/develop/README.md#license "License")
- [Questions](https://github.com/${data.githubUser}/professional-readme/blob/main/develop/README.md#questions "Questions")

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${data.license}


## View My Projects or Contact Me

- Github Page: [${data.githubUser}](https://github.com/${data.githubUser})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown
