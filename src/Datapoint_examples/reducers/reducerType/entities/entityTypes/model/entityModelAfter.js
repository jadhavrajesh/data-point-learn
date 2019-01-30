const DataPoint = require('data-point')
const dataPoint = DataPoint.create()
const assert = require('assert')

const isArray = (input) => {
    console.log('input:', input);
    console.log('Array.isArray(input):', Array.isArray(input));

    const result = Array.isArray(input);

    console.log('result:', result);
    return result;
}

dataPoint.addEntities({
    'model:foo': {
        value: '$a.b',
        after: isArray
    }
})

const input = {
    a: {
        b: [3, 15]
    }
}

dataPoint
    .resolve('model:foo', input)
    .then((output) => {
        console.log('output:', output);
        assert.deepEqual(output, true)
    })