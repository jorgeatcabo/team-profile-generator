const Employee = require('../lib/Employee');

class Intern extends Employee {
  constructor(name, id, email,school) {
    super(name, id, email);
    this.school = school;
  }

getSchool(){

}

// getRole()—overridden to return 'Intern'
}

module.exports=Intern


