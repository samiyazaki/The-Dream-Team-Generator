const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");

const teamArray = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Take me to your leader',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the name of your manager");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your manager`s ID number.',
            validate: nameInput => !isNaN(nameInput) ? true : (console.log("Please enter the employee's ID!"), false)
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter their email.',
            validate: email => {
                valid = /^[^@]+@[^@]+\.[a-z]+$/i.test(email) || (console.log ("Please enter an email"), false)
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the office number of the manager',
            validate: nameInput => !isNaN(nameInput) ? (console.log("Please enter your manager's ID"), false) : true
            
        },
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};
const addEmployee = async () => {
    console.log(`
        -------------------------------
        Adding an Employee as requested
        -------------------------------
    `);
    let employeeData;
    while(true){
        employeeData = await inquirer.prompt([
            {
                type: 'list',
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
                validate: nameInput => !isNaN(nameInput) ? true : (console.log ("Please enter the employee's ID!"), false)
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the employee's email.",
                validate: email =>  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || (console.log ('Please enter an email!'), false)
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter the employee's github username.",
                when: (input) => input.role === "Engineer",
                validate: nameInput => nameInput || (console.log ("Please enter the employee's github username!"), false)
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the intern's school",
                when: (input) => input.role === "Intern",
                validate: nameInput => nameInput || (console.log ("Please enter the intern's school!"), false)
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ]);
    let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
    let employee; 

    if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);

        console.log(employee);

    } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);

        console.log(employee);
    }

    teamArray.push(employee); 
    if(!confirmAddEmployee) break;
    }
    return teamArray;
};
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile is done! Please navigate to the index.html file to review. ")
        }
    })
};
addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });