const data = require('../data/zoo_data');

const { employees } = data;

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
  if (result.length === 0) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return result;
}

module.exports = { isManager, getRelatedEmployees };
