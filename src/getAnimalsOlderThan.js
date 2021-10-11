const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalNames = data.species.find(
    (specieName) => specieName.name === animal,
  );
  return animalNames.residents.every((animalName) => animalName.age >= age);
}

module.exports = getAnimalsOlderThan;
