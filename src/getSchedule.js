const data = require('../data/zoo_data');

const { hours, species } = data;

// Get hour when office is open and return in a string
const getOfficeHour = (day) => {
  const { open, close } = hours[day];
  return `Open from ${open}am until ${close}pm`;
};

const getExhibitionAnimals = (day) => {
  // Return an array of the animal names
  const result = species.filter((specie) => specie.availability.some((weekDay) => weekDay === day));
  return result.map((specie) => specie.name);
};

const mondayClosed = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

const schedule = {
  allDayAndAnimalsScheduled: () => {
    const result = Object.keys(hours).reduce((acc, curr) => {
      if (curr === 'Monday') acc[curr] = mondayClosed;
      else {
        acc[curr] = {
          officeHour: getOfficeHour(curr),
          exhibition: getExhibitionAnimals(curr),
        };
      }
      return acc;
    }, {});
    return result;
  },
  withDayParameter: (day) => {
    const allDaysSchedule = schedule.allDayAndAnimalsScheduled();
    return { [day]: allDaysSchedule[day] };
  },
  animalExhibition: (animalName) => {
    const getAnimal = species.find((specie) => specie.name === animalName);
    console.log(getAnimal);
    return getAnimal.availability.map((animal) => animal);
  },
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') return { Monday: mondayClosed };
  if (Object.keys(hours).includes(scheduleTarget)) return schedule.withDayParameter(scheduleTarget);
  if (species.find((specie) => specie.name === scheduleTarget)) {
    return schedule.animalExhibition(scheduleTarget);
  }
  return schedule.allDayAndAnimalsScheduled();
}

module.exports = getSchedule;
