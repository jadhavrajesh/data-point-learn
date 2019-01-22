const DataPoint = require('data-point');
const dp = DataPoint.create();

const { Model } = DataPoint.entityFactories;
const map = DataPoint.helpers.map;

const input1 = {
    result: [
        {
            name: 'R2-D2',
            type: 'robot',
            height: '1.50',
            spaceships: [
            {
                name: 'x-wing'
            }]
        },
        {
            name: 'Luke',
            type: 'human',
            height: '1.75',
            spaceships: [
            {
                name: 'x-wing'
            }]
        }
    ]
}

const PersonModel = Model('Person', {
    before: (input) => {
        // console.log('before: ', input);
        return input;
    },
    value: {
        name: '$firstname',
        type: '$type',
        height: '$height'
    },
    after: (input) => {
        // console.log('after: ', input);
        return input;
    }
});

const Person = {
    firstname: '$name',
    height: ['$height', Number],
    type: '$type'
}

dp.resolve(['$result', map(Person), map(PersonModel)], input1)
    .then(output => {
    // console.log(output);
    output.forEach(element => {
        const result = Object.values(element);
        console.log(result);
    });
});