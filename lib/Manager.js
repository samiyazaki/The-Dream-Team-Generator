const Employee = require("./Employee"); // Pulls from the Employee parent class

class Manager extends Employee {
  //Pulls from the employee class and builds on it
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber; //Sets the office number based on the user input
  }
  getOfficeNumber() {
    //Function that calls the office number. Must use getOfficeNumber and not getOffice when calling this function later
    return this.officeNumber;
  }
  getRole() {
    //Sets role of card to Manager
    return "Manager";
  }
}

module.exports = Manager;
