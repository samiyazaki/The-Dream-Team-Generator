// Here is where we create the Manager card
const generateManager = function (manager) {
  return `
    <div class="col- m-2 p-2 mt-4">
        <div class="card h-100 manager">
            <div class="card-header">
                <h3 class = "card-title">${manager.name}</h3>
                <h4 class = "card-subtitle">Manager</h4>
            </div>
            <div class="card-body">
                <p class="card-text">ID: ${manager.id}</p>
                <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="card-text">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

// Here is where we create the Engineer card
const generateEngineer = function (engineer) {
  return `
    <div class="col- m-2 p-2 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3 class="card-title">${engineer.name}</h3>
            <h4 class="card-subtitle">Engineer</h4>
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${engineer.id}</p>
            <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="card-text">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
</div>
`;
};

// Here is where we create the Intern card
const generateIntern = function (intern) {
  return `
    <div class="col- m-2 p-2 mt-4">
        <div class="card h-100">
            <div class="card-header text-center">
                <h3>${intern.name}</h3>
                <h4 class="card-subtitle">Intern</h4> </div> 
                <div class="card-body"> 
                <p class="card-text">ID: ${intern.id}</p> 
                <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p> 
                <p class="card-text">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `;
};

// Here we send the input data to the generateHTML
const generateHTML = (data) => {
  // Time to set up the cards
  let pageArray = [];
  // Now we set up the employee roles
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // Manager role check
    if (role === "Manager") {
      const managerCard = generateManager(employee);

      pageArray.push(managerCard);
    }

    // Engineer role check
    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);

      pageArray.push(engineerCard);
    }

    // Intern role check
    if (role === "Intern") {
      const internCard = generateIntern(employee);

      pageArray.push(internCard);
    }
  }

  // This combines the various employee data strings together
  const employeeCards = pageArray.join("");

  // This sets the various members to the team page
  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};

// Now we generate the team page based off of the various cards
const generateTeamPage = function (employeeCards) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>The Dream Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="style.css">
        </head>
    <body>
        <header>
            <nav class="navbar">
                <div class="navbar">Team Profile</a>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    <!--Team Cards-->
                    ${employeeCards}
                </div>
            </div>
        </main>
    </body>
    </html>
    `;
};

// This exports the generateHTML script to be called in the index.js page
module.exports = generateHTML;
