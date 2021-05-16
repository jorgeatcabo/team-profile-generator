const inquirer = require('inquirer');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Type of team member:',
        choices: [
            {
                value: '1',
                name: 'Engineer'
            },
            {
                value: '2',
                name: 'Internal'
            },
            {
                value: '0',
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
        message: 'Engineer\'s Github:',
        name: 'engineergithub',
      },
]

const inquirerMenu = async() => {

    // console.clear();
    // console.log('=========================='.green);
    // console.log('  Seleccione una opción'.white );
    // console.log('==========================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione enter para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const leerManager = async() => {

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

    const { desc } = await inquirer.prompt(manager);
    return desc;
}

const leerEngineer = async() => {
    const engineerData = await inquirer.prompt(engineer);
    return engineerData;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    leerManager,
    leerEngineer
}
