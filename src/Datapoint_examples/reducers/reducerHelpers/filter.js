const DataPoint = require('data-point');

const dataPoint = DataPoint.create();

const filter = DataPoint.helpers.filter;

const input = [{ a: 1 }, { a: 2 }]

// filters array elements that are not
// truthy for the given list reducer
const reducer = filter(
    ['$..', (input) => {
        console.log(input);
        return input > 1
    }]
)

dataPoint
    .resolve(reducer, input)
    .then(output => {
        console.log('output:', output);
    })  