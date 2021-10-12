const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter(
    (entrant) => entrant.age >= 18 && entrant.age < 50
  );
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  const people = {
    adult: adult.length,
    child: child.length,
    senior: senior.length,
  };
  return people;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) {
    return 0;
  }
}

module.exports = { calculateEntry, countEntrants };

// console.log(
//   countEntrants(),
// );
