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
  const AnimalPerLocation = species.filter(
    (specie) => specie.location === animalLocation
  );
  return AnimalPerLocation;
};

const getAnimalName = (animalPerLocation) => {
  return animalPerLocation.map((specie) => specie.name);
};

const getResidentsBySpecie = (animalPerLocation, animalName) => {
  const resident = animalPerLocation.find((specie) => animalName === specie.name);
  return resident.residents.map((residentName) => residentName.name);
};

const animalMap = {
  includeNames: () => {
    const justLocation = getJustLocation();
    const animalByName = justLocation.reduce((accumulator, location) => {
      const animalPerLocation = getLocation(location);
      const name = getAnimalName(animalPerLocation);
      const animalNames = name.map((animalName) => {
        const residentsBySpecie = getResidentsBySpecie(animalPerLocation, animalName);
        return { [animalName]: residentsBySpecie };
      });
      accumulator[location] = animalNames;
      return accumulator;
    }, {});
    return animalByName;
  },
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
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return animalMap.noOptions();
  }
  if (options.includeNames) {
    return animalMap.includeNames();
  }
  // const animal = species.reduce((accumulator, { location }) => {
  //   const animalPerLocation = getLocation(location);
  //   accumulator[location] = animalPerLocation;
  //   return accumulator;
  // }, {});
  // return animal;
}

module.exports = getAnimalMap;

const options = { includeNames: true, sex: 'female' };
console.log(getAnimalMap(options));
