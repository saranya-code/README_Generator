const fs = require('fs');
const markdown = require('./generateMarkDown')
const inquirer = require('inquirer');

inquirer
.prompt([
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
        message:"Any installation done ?",
        type: "string",
        name: "installation"
    },    
    // {
    //     message:"What are the usage ?",
    //     type: "string",
    //     name: "usage",
    // },    
    // {
    //     message:"What are lisence for the project ?",
    //     type: "checkbox",
    //     name: "lisence",
    //     choices:['MIT','LIC','GPL']
    // },  
    // {
    //     message:"Project contribution",
    //     type: "string",
    //      name: "contribution"
    // },
    // {
    //     message:"How to run the test ?",
    //     type: "string",
    //     name: "test"
    // },  
    // {
    //     message:"What is your EMail id",
    //     type: "string",
    //     name: "email"
    // },          

])
.then(answers =>{
    markdown.generateMarkdown(answers)
})


