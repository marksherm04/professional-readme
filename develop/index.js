// Packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");


// TODO: Create an array of questions for user input
const questions = () => {
	return inquirer
		.prompt([
			{
			// PROJECT TITLE
			type: "input",
			name: "title",
			message: "What is the title of your project? (Required)",
			validate: titleInput => {
				if (titleInput) {
					return true;
				} else {
					console.log("You must enter your project title to continue!");
					return false;
					}
				}


			},
			{
			// PROJECT DESCRIPTION
			type: "input",
			name: "description",
			message: "Please describe your project.",
			validate: descriptionInput => {
				if (descriptionInput) {
					return true;
				} else {
					console.log("You must enter a project description to continue!");
					return false;
					}
				}
			},
			{
			// INSTALLATION INSTRUCTIONS
			type: "input",
			name: "installation",
			message: "Please enter your installation instructions.",
			validate: installationInput => {
				if (installationInput) {
					return true;
				} else {
					console.log("You must enter your installation instructions to continue!");
					return false;
					}	
				}
			},
			{ 
			// USAGE INFORMATION
			type: "input",
			name: "usage",
			message: "Please enter how this information will be used.",
			validate: usageInput => {
				if (usageInput) {
					return true;
				} else {
					console.log("You must enter your usage information to continue!");
					return false;
					}
				}
			},
			{
			type: "input",
			name: "contributing",
			message: "Please list the project contributors.",
			validate: contributingInput => {
				if (contributingInput) {
					return true;
				} else {
					console.log("You must enter the project contributors to continue!");
					}
				}
			},
			{
			type: "input",
			name: "tests",
			message: "Please write tests for your application.",
			validate: testsInput => {
				if (testsInput) {
					return true;
				} else {
					console.log("You must write a test to continue!");
					return false;
					}
				}
			},
			{
			type: "checkbox",
			name: "license",
			message: "Select which license you used.",
			choices: ["Academic Free", "Apache", "Boost Software", "ISC", "MIT", "Mozilla Public"],
			validate: licenseInput => {
				if (licenseInput) {
					return true;
				} else {
					console.log("You must choose a license to continue!");
					return false;
					}
				}
			},
			{
			type: "input",
			name: "githubUser",
			message: "Please enter your GitHub username.",
			validate: githubUserInput => {
				if (githubUserInput) {
					return true;
				} else {
					console.log("You must enter your GitHub username to continue!");
					return false;
					}
				}
			},
			{
			type: "input",
			name: "email",
			message: "Please enter your email address.",
			validate: emailInput => {
				if (emailInput) {
					return true;
				} else {
					console.log("You must enter your email address to continue");
					return false;
					}
				}
			}

		]);
	};


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

