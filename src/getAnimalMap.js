const data = require('../data/zoo_data');

const { species } = data;

const getJustLocation = () => {
  const location = [];
  species.forEach((specie) => {
    if (location.length === 0 || !location.includes(specie.location)) {
      location.push(specie.location);
    }
  });
  return location;
};

const getLocation = (animalLocation) => {
  const AnimalPerLocation = species.filter((specie) => specie.location === animalLocation);
  return AnimalPerLocation;
};

const getAnimalName = (animalPerLocation) => animalPerLocation.map((specie) => specie.name);

const getResidentsBySpecie = (animalPerLocation, animalName, option) => {
  let resident = animalPerLocation.find((specie) => animalName === specie.name);
  if (option) {
    resident = resident.residents.filter((specieBySex) => specieBySex.sex === option);
    return resident.map((specie) => specie.name);
  }
  return resident.residents.map((residentName) => residentName.name);
};

const getAnimalByName = (optionSex = false, sorted = false) => {
  const justLocation = getJustLocation();
  const animalByName = justLocation.reduce((accumulator, location) => {
    const animalPerLocation = getLocation(location);
    const name = getAnimalName(animalPerLocation);
    const animalNames = name.map((animalName) => {
      const residentsBySpecie = getResidentsBySpecie(animalPerLocation, animalName, optionSex);
      if (sorted) residentsBySpecie.sort();
      return { [animalName]: residentsBySpecie };
    });
    accumulator[location] = animalNames;
    return accumulator;
  }, {});
  return animalByName;
};

const animalMap = {
  includeNames: (optionSex, sorted) => getAnimalByName(optionSex, sorted),
  noOptions: () => {
    const justLocation = getJustLocation();
    const animalByName = justLocation.reduce((accumulator, location) => {
      const animalPerLocation = getLocation(location);
      const name = getAnimalName(animalPerLocation);
      accumulator[location] = name;
      return accumulator;
    }, {});
    return animalByName;
  },
  sex: (optionSex, sorted) => getAnimalByName(optionSex, sorted),
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return animalMap.noOptions();
  }
  if (options.includeNames) {
    if (options.sex) return animalMap.sex(options.sex, options.sorted);
    return animalMap.includeNames(options.sex, options.sorted);
  }
}

module.exports = getAnimalMap;
