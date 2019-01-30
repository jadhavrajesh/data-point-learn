const DataPoint = require('data-point');
const assert = require('assert');

const dataPoint = DataPoint.create();

const reducer = (input, acc) => {
    // input is a reference to acc.value
    console.log(acc);
    return input + ' World'
}

dataPoint
    .resolve(reducer, 'Hello')
    .then((output) => {
        console.log(output);
        assert.strictEqual(output, 'Hello World');
    });