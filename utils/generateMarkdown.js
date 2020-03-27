const api = require("./api");



async function generateMarkdown(answers) {
	let returnFromGit = await api.getUser(answers.username);
	
    let strToWrite = `## Image is :  \n![readme](${returnFromGit.data.avatar_url})` + "\n\n" +
					`## Email is : \n${(returnFromGit.email==null)?"":xx.data.email} \n\n`+
					`## Project Title : \n${answers.projecttitle} \n\n` +
					`## Project Description : \n${answers.projectdescription} \n\n` +
					`## Table of Contents (Optional): \n${answers.tableofcontents} \n\n` +
					`## [Installation](#installation) \n${answers.installation} \n\n` +
					`## [Usage](#usage) \n${answers.usage} \n\n` +
					`## [Credits](#credits) \n${answers.credit} \n\n` +
					`## [License](#license) \n${answers.license}`;

	return strToWrite;
}

module.exports = {generateMarkdown};
