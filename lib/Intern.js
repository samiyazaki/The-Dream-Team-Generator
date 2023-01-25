const Employee = require("./Employee"); //Again, pulls from the Employee parent class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school; //Adds in the school user input
  }
  getSchool() {
    // Function to call the school
    return this.school;
  }
  getRole() {
    //Sets role to Intern
    return "Intern";
  }
}

module.exports = Intern;
