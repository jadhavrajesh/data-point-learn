const DataPoint = require('data-point');
const assert = require('assert');

const dataPoint = DataPoint.create();

const multiplyValue = (input, acc) => {
    console.log('input:', input);
    return input * acc.params.multiplier
}

dataPoint.addEntities({
    'entry:multiply': {
        value: multiplyValue,
        params: {
            multiplier: 100
        }
    }
})

dataPoint
    .resolve('model:multiply')
    .then((output) => {
        console.log('output:', output);
        // assert.deepEqual(output, 20000)
    })