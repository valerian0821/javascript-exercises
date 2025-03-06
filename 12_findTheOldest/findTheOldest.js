// const findTheOldest = function(people) {
//     people = people.map((obj) => {
//         if (obj.yearOfDeath === null) {
//             obj.yearOfDeath = new Date().getFullYear();
//         }
//         obj.oldestAge = obj.yearOfDeath - obj.yearOfBirth;
//     });
//     // const peopleAges = people.map((obj) => obj.oldestAge);
//     const peopleAges = [];
//     for (i = 0; i < people.length; i++) {
//         peopleAges.push(people[i].oldestAge);
//     }
//     const oldest = peopleAges.reduce((oldest, current) => {
//         if (current > oldest) {
//             oldest = current;
//         }
//         return oldest;
//     }, 0);
//     const oldestPerson = people.filter(people.oldestAge === oldest);
//     return oldestPerson; 
// };

const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  
  const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };

// Do not edit below this line
module.exports = findTheOldest;
