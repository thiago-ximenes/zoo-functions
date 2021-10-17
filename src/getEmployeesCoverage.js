const data = require('../data/zoo_data');

const { employees, species } = data;

const getEmployeeByParameter = (employeeParameter) => {
  const findEmployee = (employee) =>
    Object.values(employee).some((value) => value === employeeParameter);
  const result = employees.find(findEmployee);
  return result;
};

const getSpeciesOfEmployee = (responsibleFor) => {
  const animals = responsibleFor.map((animal) => species.find((specie) => specie.id === animal));
  const animalsName = animals.map((specie) => specie.name);
  const animalsLocation = animals.map((specie) => specie.location);
  return {
    animalsName,
    animalsLocation,
  };
};

function getEmployeesCoverage(employeeParameter) {
  // seu código aqui
  const employee = Object.values(employeeParameter);
  const employeeObject = getEmployeeByParameter(employee[0]);
  const { id, firstName, lastName, responsibleFor } = employeeObject;
  const speciesOfEmployee = getSpeciesOfEmployee(responsibleFor);
  const { animalsName, animalsLocation } = speciesOfEmployee;
  const result = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: animalsName,
    locations: animalsLocation,
  };
  return result;
}

module.exports = getEmployeesCoverage;

console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
