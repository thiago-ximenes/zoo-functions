const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employeeById = employees.find((employee) => employee.id === id);
  const firstSpecie = employeeById.responsibleFor[0];
  const speciePerEmployee = species.find((specie) => specie.id === firstSpecie);
  const { residents } = speciePerEmployee;
  const result = residents.reduce((acc, animal) => {
    if (animal.age > acc.age) return animal;
    return acc;
  });
  return Object.values(result);
}

module.exports = getOldestFromFirstSpecies;
