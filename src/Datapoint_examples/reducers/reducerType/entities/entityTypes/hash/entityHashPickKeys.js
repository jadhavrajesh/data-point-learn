const DataPoint = require('data-point');
const assert = require('assert');

const dataPoint = DataPoint.create();

const input = {
    name: 'DataPoint',
    url: 'https://github.com/ViacomInc/data-point'
}

dataPoint.addEntities({
    'hash:pickKeys': {
        pickKeys: ['name']
    }
})

dataPoint
    .resolve('hash:pickKeys', input)
    .then(output => {
        // notice how url is no longer 
        // in the object
        console.log(output);
        assert.deepEqual(output, {
            name: 'DataPoint',
        })
    })