const generateHTML=require('./generateHTML.js')
const fs = require('fs');
const inquirer = require('inquirer');
const { inquirerMenu, 
        inputManager,
        inputEngineer
} = require('./inquirer');

const Employee=require("./lib/Employee");
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');


const main = async() => {
    managerData = await inputManager();

    const manager= new Manager(managerData.managername,
                                managerData.managerid,
                                managerData.manageremailaddress,
                                managerData.manageroffice)
    let opt = '';
    
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const engineerData = await inputEngineer();
                //let engineer=new Engineer
                console.log(engineerData)
            break;

            case '2':
            break;
        
        }


    } while( opt !== '3' );


}


main();

