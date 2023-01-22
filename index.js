const generateHTML = require("./src/generateHTML"); //Requires and pulls the exported generateHTML page
const Manager = require("./lib/Manager"); //This pulls the Manager card data script
const Engineer = require("./lib/Engineer"); //This pulls the Engineer card data script
const Intern = require("./lib/Intern"); //This pulls the Intern card data script
const inquirer = require("inquirer"); //This is to intitalize the inquirer prompts
const fs = require("fs"); //This calls the file system node module

const teamArray = [];
//This is the initial inquirer set up and prompt
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this team`s manager?',
            validate: nameInput => {
                if (nameInput) {  //If else statement to check that the user inputs are letters since only a sociopath would use numbers in their child's name
                    return true;
                } else {
                    console.log ("Please enter the name of your manager"); // Else statement to rquest the user input a name in this field
                    return false;
                }
            }
        },
        {
            type: 'input', // This section is for the input of your managers ID number
            name: 'id',
            message: 'Please enter your manager`s ID number.',
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the manager's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Manager's email.",
            validate: email => {
                const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email); // This is a validation test to check that the user has utilized certain special characters and included a valid email address
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber', // This requests the manager's office number
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber); //This takes the user inputs and sends them to the Manager card

        teamArray.push(manager);
        console.log(manager);
    })
};
const addEmployee =  () => { // Here we are adding the employee cards after the manager.
    console.log(` 
        -------------------------------
        Adding an Employee as requested
        -------------------------------
    `);
    return inquirer.prompt ([
        {
            type: 'list', // This checks which role the user is selecting for the employee card and will then adjust which prompts to deliver.
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) { // This if else statement is checking if the values inputted are a number and if not, console log a request for the number
                    console.log ("Please enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) // This sections does a validation check to see if the user inputs matched special characters and if not requests a valid email address.
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github', 
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer", // This part checks if the user selected the Engineer role and then validates the input to be letters
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?', // This is a prompt to check if the user wants to add more members to the Team list.
            default: false
        }
    ])
    .then(employeeData => { // Setting up employeeData
      

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github); // This checks if the employee is an Engineer and uses that card

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school); // This checks if the employee is an Intern and then assigns that card

            console.log(employee);
        }

        teamArray.push(employee); //This push adds the employee data to the end of the Team array

        if (confirmAddEmployee) { // This confirms if the user wants to add an employee to the array, else it provides the array as it is.
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};


// Here we are creating the file writing function for the provided data
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // Checks for an error and console logs it
        if (err) {
            console.log(err);
            return;
        // If there are no errors, the prompt prints that the team profile has been created.
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html in the dist file.")
        }
    })
}; 

addManager() // This adds the first card, Manager to the array, then it adds an employee that was created and after that the team array is generated using the generateHTML function and javascript file.
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => { //After the file is generated, the HTML file is written 
    return writeFile(pageHTML);
  })
  .catch(err => { // If there are any errors, print out the error.
 console.log(err);
  });