const data = require('../data/zoo_data');
const { species } = data;
function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const animals = {};
    species.forEach((specie) => {
      animals[specie.name] = specie.popularity;
    });
    return animals;
  }
}

module.exports = countAnimals;

console.log(countAnimals());
