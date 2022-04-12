const people = [
    {
        name: 'Vaz',
        age: 30
    },

    {
        name: 'Masha',
        age:17
    },

    {
        name: 'Aki',
        age: 5
    },
    
    {
        name: 'Door',
        age: 32
    },

    {
        name: 'Dome',
        age: 120
    },

    {
        name: 'Poppy',
        age: 3
    }
];

const smallAge = people.filter(person => person.age < 18);

// console.log(smallAge);

const olderPeople = people
    .map((person) => {
        return {
            name: person.name,
            age: person.age + 5
        }
    })
    .sort((a, b) => { return a.age - b.age});

console.log(olderPeople);