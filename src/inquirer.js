const inquirer = require('inquirer');

const typeofmember = [
    {
        type: 'list',
        name: 'memberSelected',
        message: 'Type of team member:',
        choices: [
            {
                value: '1',
                name: 'Engineer'
            },
            {
                value: '2',
                name: 'Intern'
            },
            {
                value: '3',
                name: 'Finish'
            },
            
        ]
    }
];
const engineer = [    
    {
        type: 'input',
        message: 'Engineer\'s name:',
        name: 'engineername',
      },
      {
        type: 'input',
        message: 'Engineer\'s ID:',
        name: 'engineerid',
      },
      {
        type: 'input',
        message: 'Engineer\'s email address:',
        name: 'engineeremailaddress',
      },
      {
        type: 'input',
        message: 'Engineer\'s Github username:',
        name: 'engineergithub',
      },
]

const intern = [    
  {
      type: 'input',
      message: 'Intern\'s name:',
      name: 'internname',
    },
    {
      type: 'input',
      message: 'Intern\'s ID:',
      name: 'internid',
    },
    {
      type: 'input',
      message: 'Intern\'s email address:',
      name: 'internemailaddress',
    },
    {
      type: 'input',
      message: 'Intern\'s School:',
      name: 'internschool',
    },
]

const inquirerMenu = async() => {

    const { memberSelected } = await inquirer.prompt(typeofmember);

    return memberSelected;
}

const inputManager = async() => {

    const manager = [    
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

    const managerData = await inquirer.prompt(manager);
    return managerData;
}

const inputEngineer = async() => {
    const engineerData = await inquirer.prompt(engineer);
    return engineerData;
}

const inputIntern = async() => {
  const internData = await inquirer.prompt(intern);
  return internData;
}

module.exports = {
    inquirerMenu,
    inputManager,
    inputEngineer,
    inputIntern
}
