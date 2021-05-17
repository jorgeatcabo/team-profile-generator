const generateHTML=require('./generateHTML')
const fs = require('fs');

function writeToHTMLFile(fileName, data) { 
    const HTMLContent = generateHTML(data);
    
    fs.writeFile(`./dist/${fileName}`, HTMLContent, (err) =>
    err ? console.log(err) : console.log(`Successfully created ${fileName}!`)
);
}

module.exports=writeToHTMLFile
