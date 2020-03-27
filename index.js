const fs = require('fs');
const inquirer = require("inquirer");
const generatePage=require("./utils/generateMarkdown");
const pressAnyKey = require('press-any-key');
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
let pageContent="";

init();

function init(){
	console.clear();
	inquirer
		.prompt([
			{
				type: "input",
				message: "Enter your GitHub username: ",
				name: "username",
				validate: validateFunc
			},
			{
			  	type: "input",
			  	message: "What is your project title? (required): ",
				name: "projecttitle",
				validate: validateFunc
			},
			{
			  type: "input",
			  message: "What is the project description? (required): ",
			  name: "projectdescription",
			  validate: validateFunc
			},
			{
				type: "checkbox",
				message: "Table of Contents (Optional): ",
				name: "tableofcontents",
				choices: [
					"[Installation](#installation)", 
					"[Usage](#usage)", 
					"[Credits](#credits)", 
					"[License](#license)"
				  ]
			},
			{
			  type: "input",
			  message: "What are the steps required to install your project? ",
			  name: "installation"
			},
			{
				type: "input",
				message: "Provide instructions and examples for use. ",
				name: "usage"
			},
			{
				type: "input",
				message: "List your collaborators (comma-separated) : ",
				name: "credit"
			},
			{
				type: "list",
				message: "license: ",
				name: "license",
				choices: [
					"GNU",
					"BSD",
					"MIT"
				]
			}
		  ])
		  .then(async function( answers ) { 
			const returnedPage = await generatePage.generateMarkdown(answers);

			// console.log("here is the test for data! "+JSON.stringify(answers));

			writeFileAsync("MyREADME.md", returnedPage)
			.then(function() {
				console.log("\n Successfully wrote to README.md");
				})
			.catch(function(err) {
				console.log(err);
				});
		  });
		}

function pressAnyKeyFunc(){
	pressAnyKey("Press any key to resolve, or CTRL+C to reject", {
		ctrlC: "reject"
	})
	.then(() => {
		init();
	})
	.catch(() => {
		console.log('You pressed CTRL+C')
	})
}

function validateFunc(input){
	if (input.trim().length==0) { //if (typeof input !== 'number')
		console.clear();console.log('Please enter a value! \n');
		return false;
	}
	else {
		return true;
	}
}
		



