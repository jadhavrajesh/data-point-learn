const DataPoint = require('data-point');
const assert = require('assert');

const dataPoint = DataPoint.create();

const input = [
    {
        a: {
            b: 'Hello World'
        }
    },
    {
        a: {
            b: 'Hello Solar System'
        }
    },
    {
        a: {
            b: 'Hello Universe'
        }
    }
]


dataPoint
    .resolve('$a.b[]', input)
    .then((output) => {
        console.log('output:', output);
        assert.deepEqual(output, ['Hello World', 'Hello Solar System', 'Hello Universe']);
    });