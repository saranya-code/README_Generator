const fs = require('fs');
const markdown = require('./generateMarkDown')
const inquirer = require('inquirer');

inquirer
.prompt([
    {
        message:"Enter GITHUB Username :",
        type: "string",
        name: "gitHubUserName"

    },
    {
        message:"Enter GITHUB Mail ID :",
        type: "string",
        name: "gitHubId"

    },
    {
        message:"Enter GITHUB Repository name :",
        type: "string",
        name: "gitHubRepositoryName"

    },
    {
        message:"What is the title of the project :",
        type: "string",
        name: "title"

    },
    {
        message:"Write Description about the project :",
        type: "string",
        name: "description",
        
    },   
    {
        message:"Enter the nmp installation command :",
        type: "string",
        name: "installation"
    },    
    {
        message:"What is the command to run the application  <node filename.js> ?",
        type: "string",
        name: "usage"
    },    
    {
        message:"What are lisence for the project ?",
        type: "checkbox",
        name: "lisence",
        choices:['MIT','ISC','GPL']
    },  
    
    {
        message:"How to run the test ?",
        type: "string",
        name: "test"
    },  
           

])
.then(answers =>{
    markdown.generateMarkdown(answers)
})


