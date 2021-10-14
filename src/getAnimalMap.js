const data = require('../data/zoo_data');

const { species } = data;

function getAnimalMap(options) {
  const animalMap = species.reduce((accumulator, { location }) => {
    const animalPerLocation = species.filter((specie) => specie.location === location);
    const animalName = animalPerLocation.map((specie) => specie.name);
    const residentsData = animalPerLocation.map((specie) => specie.residents);
    const residentsName = residentsData.map((resident) =>resident.map((animal) => animal.name));
    animalName.forEach((name) => {
      accumulator[location] = { [name]: residentsName };
    });
    // accumulator[location] = { [animalName]: residentsName };
    return accumulator;
  }, {});
  return animalMap;
}

module.exports = getAnimalMap;

console.log(getAnimalMap());
