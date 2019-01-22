const DataPoint = require('data-point')
const dataPoint = DataPoint.create()
const assert = require('assert') 

// accumalator
const input = {
    a: {
        b: [
            'Hello World'
        ]
    }
}

// gets the entire value of input
dataPoint
    .resolve('$', input)    
    .then((output) => {        
        console.log('input', input);
        console.log('output', output);        
        assert.equal(output, input);
    })