const DataPoint = require('data-point');
const assert = require('assert');

const dataPoint = DataPoint.create();

const multiplyValue = (input, acc) => {
    console.log('input:', input);
    return input * acc.params.multiplier
}

dataPoint.addEntities({
    'model:multiply': {
        value: multiplyValue,
        params: {
            multiplier: 100
        }
    }
})

dataPoint
    .resolve('model:multiply', 200)
    .then((output) => {
        console.log('output:', output);
        // assert.deepEqual(output, 20000)
    })