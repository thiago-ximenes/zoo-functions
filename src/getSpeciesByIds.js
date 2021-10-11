const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const result = ids.map((id) => data.species.find((specie) => specie.id === id));
  return !ids ? [] : result;
}

module.exports = getSpeciesByIds;
