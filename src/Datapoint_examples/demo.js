const DataPoint = require('data-point');
const dp = DataPoint.create();

const map = DataPoint.helpers.map;

const input = {
    result: {
        name: 'R2-D2',
        type: 'robot',
        height: '1.60'
    }
}

const Person = {
    firstname: '$name',
    height: '$height'
}

// const toNumber = (input) => {
//     return Number(input);
// }

dp.resolve(['$result', Person], input)
    .then(output => console.log(output));

const input1 = {
    result: [
        {
            name: 'R2-D2',
            type: 'robot',
            height: '1.50',
            spaceships: [
            {
                name: 'x-wing'
            },
            {
                name: 'wing'
            }
            ]
        },
        {
            name: 'Luke',
            type: 'human',
            height: '1.75',
            spaceships: [
            {
                name: 'y-wing'
            }]
        }
    ]
}

const Person1 = {
    firstname: '$name',
    height: ['$height', Number],
    spaceships: ['$spaceships', map('$name')]
}

dp.resolve(['$result', map(Person1)], input1)
    .then(output => console.log(output));