const DataPoint = require('data-point');
const assert = require('assert');

const dataPoint = DataPoint.create();

const logError = (error) => {
    throw error
}

dataPoint.addEntities({
    'model:getArray': {
        value: '$a',
        outputType: 'array',
        error: logError
    }
})

const input = {
    a: {
        b: 'foo'
    }
}

dataPoint
    .resolve('model:getArray', input)
    .catch(error => {
        console.log('error:', error.toString())
    })