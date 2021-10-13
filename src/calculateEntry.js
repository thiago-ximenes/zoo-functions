const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
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
  if (!entrants || (typeof entrants === 'object' && Object.keys(entrants).length === 0)
  ) return 0;
  const entrant = countEntrants(entrants);
  const { adult, child, senior } = entrant;

  const childTicket = 20.99;
  const adultTicket = 49.99;
  const seniorTicket = 24.99;
  const sumBilling = adult * adultTicket + child * childTicket + senior * seniorTicket;
  return sumBilling;
}

module.exports = { calculateEntry, countEntrants };

//  adult = 49.99 senior 24.99 child 20.99
