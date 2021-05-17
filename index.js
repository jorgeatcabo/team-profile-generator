const generateHTML=require('./src/generateHTML.js')
const fs = require('fs');
const inquirer = require('inquirer');
const { inquirerMenu, 
        inputManager,
        inputEngineer,
        inputIntern
} = require('./inquirer');
const createManagerCard=require('./src/createManagerCard')
const createEngineerCard=require('./src/createEngineerCard')
const createInternCard=require('./src/createInternCard')

const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const writeToHTMLFile=require('./src/writeToHTMLFile')


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
                const internData = await inputIntern();
                let intern= new Intern(internData.internname,
                    internData.internid,
                    internData.internemailaddress,
                    internData.internschool)
                    arrIntern.push(intern)
            break;
        
        }


    } while( opt !== '3' );
    var arrManagerCard=[]
    var arrEngineerCard=[]
    var arrInternCard=[]
    //var arrCards=[]
    createManagerCard(arrManager,arrManagerCard)
    createEngineerCard(arrEngineer,arrEngineerCard)
    createInternCard(arrIntern,arrInternCard)
    const arrCards=[...arrManagerCard,...arrEngineerCard,...arrInternCard]
    // console.log(arrCards)
    console.log(arrCards.join('\n'));
    writeToHTMLFile('index.html',arrCards.join('\n'))

}


main();

