const DataPoint = require('data-point');
const assert = require('assert');

const dataPoint = DataPoint.create();

const input = {
    a: {
        b: ['Hello World']
    }
};

// traverse object
dataPoint
    .resolve('$a.b[0]', input)
    .then((output) => {
        console.log(output);
        assert.equal(output, 'Hello World');
    });