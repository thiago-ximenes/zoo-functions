const data = require('../data/zoo_data');

const { employees, species } = data;

const getSpeciesOfEmployee = (responsibleFor) => {
  const animals = responsibleFor.map((animal) => species.find((specie) => specie.id === animal));
  const animalsName = animals.map((specie) => specie.name);
  const animalsLocation = animals.map((specie) => specie.location);
  return {
    animalsName,
    animalsLocation,
  };
};

const getAllEmployeesId = () => {
  const result = employees.reduce((acc, { id, firstName, lastName, responsibleFor }) => {
    const speciesOfEmployee = getSpeciesOfEmployee(responsibleFor);
    const { animalsName, animalsLocation } = speciesOfEmployee;
    acc.push({
      id,
      fullName: `${firstName} ${lastName}`,
      species: animalsName,
      locations: animalsLocation,
    });
    return acc;
  }, []);
  return result;
};

function getEmployeesCoverage(employeeParameter) {
  // seu código aqui
  if (!employeeParameter) return getAllEmployeesId();
  const employeeCoverage = Object.values(employeeParameter)[0];
  const allEmployees = getAllEmployeesId();
  const result = allEmployees.find((employee) => {
    const fullNameSplitted = employee.fullName.split(' ');
    const someFunction = (value) => value === employeeCoverage;
    return employee.id === employeeCoverage || fullNameSplitted.some(someFunction);
  });
  return result;
}

module.exports = getEmployeesCoverage;
