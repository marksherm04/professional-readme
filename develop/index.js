// TODO: Include packages needed for this application
const userProfile = process.argv.slice(2, process.argv.length);
console.log(userProfile)

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const printProfileData = (profileDataArr) => {
	console.log(profileDataArr);
};

printProfileData(userProfile);