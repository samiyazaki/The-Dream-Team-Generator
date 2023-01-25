const Employee = require("./Employee"); //Sets the parent class for the constructor

class Engineer extends Employee {
  //This class extends from the employee class meaning that it takes the Employee parent and allows the user to add in custom line items
  constructor(name, id, email, github) {
    super(name, id, email); //Sets the base for the constructor

    this.github = github; // Adds in the github user info question
  }
  getGithub() {
    //This is the function to call the gitHub info received from the user
    return this.github;
  }
  getRole() {
    // Sets the role to Engineer
    return "Engineer";
  }
}

module.exports = Engineer;
