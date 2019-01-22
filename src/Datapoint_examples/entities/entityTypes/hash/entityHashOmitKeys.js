const DataPoint = require('data-point');
const assert = require('assert');

const dataPoint = DataPoint.create();

// notice how name is no longer in the object
const expectedResult = {
    url: 'https://github.com/ViacomInc/data-point'
}

dataPoint.addEntities({
    'hash:omitKeys': {
        omitKeys: ['name']
    }
})

const input = {
    name: 'DataPoint',
    url: 'https://github.com/ViacomInc/data-point'
}

dataPoint.resolve('hash:omitKeys', input).then(output => {
    console.log('output:', output);
    assert.deepEqual(output, expectedResult)
})