const DataPoint = require('data-point');
const assert = require('assert');

const dataPoint = DataPoint.create();

const input = {
    a: {
        b: {
            c: 'Hello',
            d: ' World!!'
        }
    }
}

dataPoint.addEntities({
    'hash:helloWorld': {
        value: '$a.b'
    }
})

dataPoint
    .resolve('hash:helloWorld', input)
    .then((output) => {
        console.log('output:', output);
        assert.deepEqual(output, {
            c: 'Hello',
            d: ' World!!'
        })
    })