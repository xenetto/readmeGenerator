const api = require("./utils/api");

function generateMarkdown(answers) {
  return 
    `## Image is :  \n![readme](${api.avatar_url})` + "\n\n" +
					`## Email is : \n${(api.email==null)?"":api.email} \n\n`+
					`## Project Title : \n${answers.projecttitle} \n\n` +
					`## Project Description : \n${answers.projectdescription} \n\n` +
					`## Table of Contents (Optional): \n${answers.tableofcontents} \n\n` +
					`## [Installation](#installation) \n${answers.installation} \n\n` +
					`## [Usage](#usage) \n${answers.usage} \n\n` +
					`## [Credits](#credits) \n${answers.credit} \n\n` +
					`## [License](#license) \n${answers.license}`;
}

module.exports = generateMarkdown;
