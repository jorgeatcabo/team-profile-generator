const generateHTML=require('./src/generateHTML.js')
const fs = require('fs');
const inquirer = require('inquirer');
const { inquirerMenu, 
        inputManager,
        inputEngineer
} = require('./inquirer');
const createManagerCard=require('./src/createManagerCard')

const Employee=require("./lib/Employee");
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

var arrManager=[]
var arrEngineer=[]
var arrIntern=[]
const main = async() => {
    managerData = await inputManager();

    const manager= new Manager(managerData.managername,
                                managerData.managerid,
                                managerData.manageremailaddress,
                                managerData.manageroffice)
    
    arrManager.push(manager)
    
    let opt = '';
    
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const engineerData = await inputEngineer();
                let engineer= new Engineer(engineerData.engineername,
                engineerData.engineerid,
                engineerData.engineeremailaddress,
                engineerData.engineergithub)
                arrEngineer.push(engineer)
            break;

            case '2':
            break;
        
        }


    } while( opt !== '3' );
    var arrManagerCard=[]
    createManagerCard(arrManager,arrManagerCard)
    generateHTML(arrManagerCard)
    console.log(generateHTML(arrManagerCard))

}


main();

