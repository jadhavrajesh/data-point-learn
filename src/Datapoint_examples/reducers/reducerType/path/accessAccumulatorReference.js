const DataPoint = require('data-point');
const assert = require('assert');

const dataPoint = DataPoint.create();

// accumalator
const input = {
    a: {
        b: [
            'Hello World'
        ]
    }
}

// access the reference of accumlator / input 
dataPoint
    .resolve('$..value', input)
    .then(output => {
        console.log('output', output);
        assert.equal(output, input);
    });
