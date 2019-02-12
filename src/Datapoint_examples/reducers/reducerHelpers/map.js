const DataPoint = require('data-point');
const dataPoint = DataPoint.create();

const map = DataPoint.helpers.map;

const input = [
    {
        a: 1,
        b: 2
    }, {
        a: 2,
        b: 2
    }
]

const reducer = map(
    ['$', (input) => input.b * 2]
)

dataPoint
    .resolve(reducer, input)
    .then(output => {
        console.log('output:', output);
    })