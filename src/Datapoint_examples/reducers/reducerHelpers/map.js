const DataPoint = require('data-point');

const dataPoint = DataPoint.create();

const map = DataPoint.helpers.map;

const input = [{
    a: 1
}, {
    a: 2
}]

// get path `a` then multiply by 2
const reducer = map(
    ['$a', (input) => input * 2]
)

dataPoint
    .resolve(reducer, input)
    .then(output => {
        console.log('output:', output);
    })