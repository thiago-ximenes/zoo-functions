const data = require('../data/zoo_data');

const { employees } = data;
const { firstName, lastName } = employees;

function isManager(id) {
  // seu código aqui
  const managersList = [];
  data.employees.map((employee) => managersList.push(...employee.managers));
  return managersList.some((manager) => manager === id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const team = employees.filter((manager) => manager.managers.some((id) => id === managerId));
  const result = team.map((employee) => `${employee.firstName} ${employee.lastName}`);
  return result;
}

module.exports = { isManager, getRelatedEmployees };

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
