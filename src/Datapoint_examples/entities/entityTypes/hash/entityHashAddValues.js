const DataPoint = require('data-point');
const assert = require('assert');

const dataPoint = DataPoint.create();

dataPoint.addEntities({
    'hash:addValues': {
        addValues: {
            name: 'DataPoint',
            url: 'https://github.com/ViacomInc/data-point',
            foo: 'value',
            bar: true,
            obj: {
                a: 'a'
            }
        }
    }
})

// keys came out intact
const expectedResult = {
    name: 'DataPoint',
    url: 'https://github.com/ViacomInc/data-point',
    foo: 'value',
    bar: true,
    obj: {
        a: 'a'
    }
}

dataPoint
    .resolve('hash:addValues', expectedResult)
    .then(output => {
        console.log('output;', output)
        assert.deepEqual(output, expectedResult)
    })