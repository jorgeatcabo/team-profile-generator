const generateHTML=require('./generateHTML.js')
const fs = require('fs');
const inquirer = require('inquirer');

const questions = [    
    {
      type: 'input',
      message: 'Manager\'s name:',
      name: 'managername',
    },
    {
      type: 'input',
      message: 'Manager\'s ID:',
      name: 'managerid',
    },
    {
      type: 'input',
      message: 'Manager\'s email address:',
      name: 'manageremailaddress',
    },
    {
      type: 'input',
      message: 'Manager\'s office:',
      name: 'manageroffice',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Successfully created HTML File!')
);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    const HTMLContent = generateHTML.generateHTML(answers);
    writeToFile('team-profile.html', HTMLContent)
  });
}

// Function call to initialize app
init();