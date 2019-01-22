const DataPoint = require('data-point')
const dataPoint = DataPoint.create()
const assert = require('assert')

const input = {
    a: {
        b: {
            c: 'Hello',
            d: ' World!!'
        }
    }
}

dataPoint.addEntities({
    'hash:helloWorld': {
        value: '$a.b'
    }
})

dataPoint
    .resolve('hash:helloWorld', input)
    .then((output) => {
        assert.deepEqual(output, {
            c: 'Hello',
            d: ' World!!'
        })
    })