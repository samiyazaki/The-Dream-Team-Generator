class Employee { // class constructor for the Employee, setting the user inputs to name, id and email.
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }
    getName () { //Gets the user input for name
        return this.name;
    }
    getId () { //Sets the id number for the employee
        return this.id;
    }   
    getEmail () {  //Sets the email for the employee
        return this.email;
    }
    getRole () { //Sets the role for the employee, must make sure the constructor is being properly called or the program will fail. ../lib is needed for directory
        return 'Employee'; 
    }
};

module.exports = Employee; 