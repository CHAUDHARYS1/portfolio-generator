const inquirer = require('inquirer');

const promptUser = () => {
return inquirer.prompt([
        {
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

const promptProject = () => {
    console.log("================= Add a New Project =================");
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
    ]);
};
promptUser()
.then(answers => console.log(answers))
.then(promptProject)
.then(projectAnswers => console.log(projectAnswers));
;
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const [name, github] = profileDataArgs;

// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Checkout out index.html to see the output');
// });