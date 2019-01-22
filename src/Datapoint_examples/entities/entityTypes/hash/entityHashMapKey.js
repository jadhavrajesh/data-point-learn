const DataPoint = require('data-point');
const assert = require('assert');
const _ = require('lodash');

const dataPoint = DataPoint.create();

const input = {
    name: 'DataPoint'
}

dataPoint.addEntities({
    'hash:mapKeys': {
        mapKeys: {
            // map to acc.value.name
            name: '$name',
            // uses a list reducer to
            // map to acc.value.name
            // and generate a string with
            // a function reducer
            url: [
                '$name',
                input => {
                    return `https://github.com/ViacomInc/${_.kebabCase(input)}`
                }
            ]
        }
    }
})



dataPoint
    .resolve('hash:mapKeys', input)
    .then(output => {
        console.log('output:', output);
        assert.deepEqual(output, {
            name: 'DataPoint',
            url: 'https://github.com/ViacomInc/data-point'
        })
    })