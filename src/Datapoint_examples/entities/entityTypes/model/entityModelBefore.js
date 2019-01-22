const DataPoint = require('data-point');
// const assert = require('assert');

const dataPoint = DataPoint.create();

const toArray = (input) => {
    console.log('input:', input);
    console.log('Array.isArray(input):', Array.isArray(input));
    
    const result = Array.isArray(input) ? input : [input];

    console.log('result:', result);
    return result;
}

dataPoint.addEntities({
    'model:foo': {
        before: toArray,
        value: '$'
    }
})

const input = 100;

dataPoint
    .resolve('model:foo', input)
    .then(output => {
        console.log('output:', output);
        // assert.deepEqual(output, [100])
    })