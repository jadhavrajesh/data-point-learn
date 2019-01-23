const DataPoint = require('data-point');
const constant = DataPoint.helpers.constant;

const dataPoint = DataPoint.create();

const input = {
    a: 1,
    b: 2
}

const reducer = {
    a: '$a',
    b: constant({
        a: '$a',
        b: 5
    })
}

dataPoint
    .resolve(reducer, input)
    .then(output => {
        console.log('output:',output);
    });