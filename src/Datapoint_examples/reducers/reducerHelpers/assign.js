const DataPoint = require('data-point');
const dataPoint = DataPoint.create();

const assign = DataPoint.helpers.assign;

const input = {
    a: 1,
    b: {
        c: 2
    }
}

// merges the object reducer with
// accumulator.value
const reducer = assign({
    c: '$b.c'
})

dataPoint
    .resolve(reducer, input)
    .then(output => {
        console.log('output:', output);
    })