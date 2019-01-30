const DataPoint = require('data-point');
const assert = require('assert');

const dataPoint = DataPoint.create()

const input = {
    name: 'DataPoint'
}

dataPoint.addEntities({
    'hash:addKeys': {
        addKeys: {
            nameLowerCase: ['$name', input => input.toLowerCase()],
            url: () => 'https://github.com/ViacomInc/data-point'
        }
    }
})

dataPoint
    .resolve('hash:addKeys', input)
    .then(output => {
        console.log('output:', output);
        assert.deepStrictEqual(output, {
            name: 'DataPoint',
            nameLowerCase: 'datapoint',
            url: 'https://github.com/ViacomInc/data-point'
        })
    })