const DataPoint = require('data-point');
const assert = require('assert');

const dataPoint = DataPoint.create();

const reducer = (input, acc) => {
    // input is a reference to acc.value
    // return Promise.resolve(acc.value + ' World');
    return Promise.reject(acc.value + ' World');
}

dataPoint
    .resolve(reducer, 'Hello')
    .then(output => {
        console.log('output', output);
        assert.strictEqual(output, 'Hello World');
    })
    .catch(err => {
        console.log('err', err);
    });
