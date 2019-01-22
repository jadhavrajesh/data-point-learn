const DataPoint = require('data-point')
const dataPoint = DataPoint.create()
const assert = require('assert')

dataPoint.addEntities({
    'hash:pickKeys': {
        pickKeys: ['url']
    }
})

const input = {
    name: 'DataPoint',
    url: 'https://github.com/ViacomInc/data-point'
}

dataPoint.resolve('hash:pickKeys', input).then(output => {
    // notice how name is no longer 
    // in the object
    assert.deepEqual(output, {
        url: 'https://github.com/ViacomInc/data-point'
    })
})