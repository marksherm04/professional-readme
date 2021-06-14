// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  // returns the title of the project, using ${data.input} it pulls the information from index.js that the user inputs and puts it underneath the correct title
  // questions section lists github standard site with user input to show url to the user GitHub page and email as well
  return `# ${data.title}
 
  ## Table of Contents
- [Description] (#description)
- [Installation] (#installation)
- [Usage] (#usage)
- [Contributing] (#contributing)
- [Tests] (#tests)
- [License} (#license)
- [Questions] (#questions)

## Description
${data.description}

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

## Questions

- Github Page: [${data.githubUser}](https://github.com/${data.githubUser})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown
