const generateHTML=require('./src/generateHTML.js')
const fs = require('fs');
const inquirer = require('inquirer');
const { inquirerMenu, 
        inputManager,
        inputEngineer,
        inputIntern
} = require('./src/inquirer');

//Modules for creating info cards
const createManagerCard=require('./src/createManagerCard')
const createEngineerCard=require('./src/createEngineerCard')
const createInternCard=require('./src/createInternCard')

//Classes
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const writeToHTMLFile=require('./src/writeToHTMLFile') 

//Arrays for storing team members info
var arrManager=[]
var arrEngineer=[]
var arrIntern=[]

const main = async() => {

    //Input for manager info
    managerData = await inputManager();

    const manager= new Manager(managerData.managername,
                                managerData.managerid,
                                managerData.manageremailaddress,
                                managerData.manageroffice)
    
    //Save manager info into an array
    arrManager.push(manager)
    
    let opt = '';
    
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                //Input for engineer info
                const engineerData = await inputEngineer();
                let engineer= new Engineer(engineerData.engineername,
                engineerData.engineerid,
                engineerData.engineeremailaddress,
                engineerData.engineergithub)
                arrEngineer.push(engineer)
            break;

            case '2':
                //Input for intern info
                const internData = await inputIntern();
                let intern= new Intern(internData.internname,
                    internData.internid,
                    internData.internemailaddress,
                    internData.internschool)
                    arrIntern.push(intern)
            break;
        
        }

    } while( opt !== '3' );

    //Arrays for storing team members info cards
    var arrManagerCard=[]
    var arrEngineerCard=[]
    var arrInternCard=[]

    //Creating team members cards
    createManagerCard(arrManager,arrManagerCard)
    createEngineerCard(arrEngineer,arrEngineerCard)
    createInternCard(arrIntern,arrInternCard)

    //Joining team members cards
    const arrCards=[...arrManagerCard,...arrEngineerCard,...arrInternCard]

    //Saving all team members cards in a file
    writeToHTMLFile('index.html',arrCards.join('\n'))
}

main();

