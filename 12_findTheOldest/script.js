const findTheOldest = function(people) {
    const peopleNew = people.map((obj) => {
        if ("yearOfDeath" in obj === false) {
            obj.yearOfDeath = new Date().getFullYear();
        }
        obj.oldestAge = obj.yearOfDeath - obj.yearOfBirth;
    });
    console.log(peopleNew);
    people = people.sort((obj1, obj2) => obj1.oldestAge > obj2.oldestAge ? 1 : -1);
    // console.log(people);
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

  findTheOldest(people);