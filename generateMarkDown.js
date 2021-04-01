let fs = require('fs');
// const axios = require('axios');
//const fetch = require('node-fetch');

async function generateMarkdown (answer){

const createdMarkDown = `# ${answer.title}\n
![node](https://badge.fury.io/js/node.svg)
![javascript](https://img.shields.io/badge/Javascript-100%25-yellowgreen)
![node](https://img.shields.io/badge/npm-100%25-orange)
## Description\n
${answer.description} \n
## Table of content\n
1. [Installation](#installation) 
2. [Usage](#usage) 
3. [Lisence](#lisence) 
4. [Contribution](#contribution) 
5. [Run the test](#test) 
6. [Questions](#Questions) \n
### Installation 
    ${answer.installation} \n
### Usage \n
    ${answer.usage} \n
### Lisence \n
    ${answer.lisence} \n
### Contribution \n 
* Fork the repository
* Clone the repository by copying the link
* Create Pull request
* Merge the code into main \n
### Tests \n
    ${answer.test}\n 
### Questions \n      
* If you have any questions feel free to contact me [${answer.gitHubUserName}](https://github.com/${answer.gitHubUserName}) or Email me ${answer.gitHubId} \n 
* You can also look my [Repository](https://github.com/${answer.gitHubUserName}/${answer.gitHubRepositoryName}) \n
### Screenshot \n
![Webpage Screenshot ](./screenshot/readme_questions.png?raw=true)`;


fs.writeFileSync('README.md', createdMarkDown, (err)=> err && console.log(err))
}

module.exports = {generateMarkdown};