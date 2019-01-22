const DataPoint = require('data-point');
const assert = require('assert');

const dataPoint = DataPoint.create();

const reducer = (input, acc, next) => {
    // next takes err, value
    next(null, acc.value + ' World');
}

dataPoint
    .resolve(reducer, 'Hello')
    .then(output => {
        console.log(output);
    })
    .catch(err => {
        console.log('err:', err);
    });