const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is Github username?'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some info about yourself:'
        }
    ]);
};

const promptProject = portfolioData => {
    console.log("================= Add a New Project =================");

    // if there's no 'projects' array properrty, ceate one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your project name?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide info about your projects: (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the github link to your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]).then(projectData => {
        portfolioData.projects.push(projectData);
        if(projectData.confirmAddProject){
            return promptProject(portfolioData);
        } else{
            return portfolioData;
        }
    });
};
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });
    // const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const [name, github] = profileDataArgs;

// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Checkout out index.html to see the output');
// });