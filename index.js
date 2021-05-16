const generateHTML=require('./generateHTML.js')
const fs = require('fs');
const inquirer = require('inquirer');
const { inquirerMenu, 
        pausa,
        leerManager,
        leerEngineer
} = require('./inquirer');

const Employee=require("./lib/Employee")


const main = async() => {
    manager = await leerManager();
    let opt = '';
    
    do {
        // Imprimir el menú
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const engineerData = await leerEngineer();
            break;

            case '2':
            break;
        
        }



        await pausa();

    } while( opt !== '0' );



}


main();

