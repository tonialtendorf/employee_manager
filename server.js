//requiring mysql
const mysql = require('mysql2');
const inquirer = require('inquirer');

//connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Tonivoh11!',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

db.connect(function (err) {
    if (err) throw err;
    promptMenu();
});

function promptMenu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeManager',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Complete'] 
        }])
        .then(res => {
            switch (res.employeeManager) {
                case "View all departments":
                    viewDepartments();
                    break;
                // case "View all roles":
                //     viewRoles();
                //     break;
                // case "View all employees":
                //     viewEmployees();
                //     break;
                // case "Add a department":
                //     addDepartment();
                //     break;
                // case "Add a role":
                //     addRole();
                //     break;
                // case "Add an employee":
                //     addEmployee();
                //     break;
                // case "Update an employee role":
                //     updateRole();
                //     break;
                default:
                    complete();
            }
        });
};
const viewDepartments = () => {
    let query =
    `SELECT
        department.id,
        department.name
    FROM department`

    db.query(query, (err, res)=>{
        if (err) throw err;
        console.table(res);
        promptMenu();
      });
  }





const complete = () => {
    console.log(`Finished`);
}

