const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const employeeFirstName = data.employees.find(
    (employee) => employee.firstName === employeeName,
  );
  const employeeLastName = data.employees.find(
    (employee) => employee.lastName === employeeName,
  );
  if (employeeFirstName) {
    return employeeFirstName;
  }
  if (employeeLastName) {
    return employeeLastName;
  }
  return {};
}

module.exports = getEmployeeByName;

console.log(getEmployeeByName('Burl'));
