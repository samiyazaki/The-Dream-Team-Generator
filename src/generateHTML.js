const generateManager = function (manager) {
  return `
    <div class="col-4 mt-4">
        <div class="card h-100 manager">
            <div class="card-header">
                <h3 class = "card-title">${manager.name}</h3>
                <h4 class = "card-subtitle" mb-2 text-muted>Manager</h4>
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

// create Engineer card
const generateEngineer = function (engineer) {
  return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3 class="card-title">${engineer.name}</h3>
            <h4 class="card-subtitle mb-2 text-muted">Engineer</h4>
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

// create Intern card
const generateIntern = function (intern) {
  return `
    <div class="col-md-4 mt-4">
        <div class="card h-100">
            <div class="card-header text-center">
                <h3>${intern.name}</h3>
                <h4>Intern</h4> </div> 
                <div class="card-body"> 
                <p class="card-text text-center">ID: ${intern.id}</p> 
                <p class="card-text text-center">Email: <a href="mailto:${intern.email}">${intern.email}</a></p> 
                <p class="card-text text-center">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `;
};

// push array to page
const generateHTML = (data) => {
    // array for cards
    let pageArray = [];
  
    for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole();
  
      // call manager function
      if (role === "Manager") {
        const managerCard = generateManager(employee);
  
        pageArray.push(managerCard);
      }
  
      // call engineer function
      if (role === "Engineer") {
        const engineerCard = generateEngineer(employee);
  
        pageArray.push(engineerCard);
      }
  
      // call intern function
      if (role === "Intern") {
        const internCard = generateIntern(employee);
  
        pageArray.push(internCard);
      }
    }
  
    // joining strings
    const employeeCards = pageArray.join("");
  
    // return to generated page
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
  };
  
  // generate html page
  const generateTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="style.css">
        </head>
    <body>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Team Profile</a>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    <!--Team Cards-->
                    ${employeeCards}
                </div>
            </div>
        </main>
    </body>
    </html>
    `;
  };
 
  
  
  
  
  

// export to index
module.exports = generateHTML;
