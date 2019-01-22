const DataPoint = require('data-point')
const dataPoint = DataPoint.create()
const assert = require('assert')

dataPoint.addEntities({
    'hash:pickKeys': {
        pickKeys: ['name']
    }
})

const input = {
    name: 'DataPoint',
    url: 'https://github.com/ViacomInc/data-point'
}

dataPoint.resolve('hash:pickKeys', input).then(output => {
    // notice how name is no longer 
    // in the object
    console.log(output);
    assert.deepEqual(output, {
        name: 'DataPoint',
    })
})