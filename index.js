// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs =require ('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your full name?",
        name: "name",
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of this Project?"
    },
    {
        type: "input",
        name: "description1",
        message: "Why did you build this project? (Note: The answer is not *because I had to for work/school*)"
    },
    {
        type: "input",
        name: "description2",
        message: "What problem does this application address?"
    },
    {
        type: "input",
        name: "features",
        message: "What features does your project have?"
       },
       {
        type: "input",
        name: "installation",
        message: "What are the step by step instructions for installing your project?"
       },
    {
        type: "input",
        name: "usage",
        message: "Please write some instructions about how to use this application."
    },
    {
        type: "list",
        name: "licenses",
        message: "What license does this application have?",
        choices: ["The MIT License", "The Apache License", "The GPL License",]
    },
    {
        type: "input",
        name: "credits",
        message: "Who/What should be credited in making this application possible?"
    },
    {
        type: "input",
        name: "gitHubID",
        message: "What is your gitHub ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your e-mail address?"
    }
]
function writeToFile(filename,data) {
    console.log(data)
    filename =`README.md`
    
    fs.writeFile(filename, data.trim(), function(error){
        if (error){
            console.log(error)
        } 
    }) 
}
function init() {
    inquirer.prompt(questions)
    
    .then(function (response) {
        
        let rmTemplate = generateMarkdown(response)
        console.log(rmTemplate)
    writeToFile("README.md", rmTemplate)
        }).catch(function(error){   
        })

}// // Function call to initialize app
init();
