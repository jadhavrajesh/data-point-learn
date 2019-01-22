const DataPoint = require('data-point')
const dataPoint = DataPoint.create()
const assert = require('assert')

dataPoint.addEntities({
    'hash:addValues': {
        addValues: {
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

const input = {
    name: 'DataPoint',
    url: 'https://github.com/ViacomInc/data-point'
}

dataPoint
    .resolve('hash:addValues',input)
    .then(output => {
        console.log(output)
        assert.deepEqual(output, expectedResult)
    })