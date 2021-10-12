const data = require('../data/zoo_data');
const { species } = data;
function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const animals = {};
    species.forEach((specie) => {
      animals[specie.name] = specie.residents.length;
    });
    return animals;
  }
  if (animal.sex) {
    const getAnimal = species.find((specieName) => specieName.name === animal.specie);
    const lengthPerSex = getAnimal.residents.filter((animalSex) => animal.sex === animalSex.sex);
    return lengthPerSex.length;
  }
  const animalName = species.find(
    (specie) => specie.name === animal.specie,
  );
  return animalName.residents.length;
}

module.exports = countAnimals;

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
