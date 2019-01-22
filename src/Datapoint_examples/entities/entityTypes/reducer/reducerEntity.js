const DataPoint = require('data-point')
const assert = require('assert')

const dataPoint = DataPoint.create()

const input = {
    a: {
        b: {
            c: [1, 2, 3]
        }
    }
}

// A Reducer entity is a 'snippet' that you can re-use in other entities.

const getMax = (input) => {
    console.log('inside getmax, input:', input);
    return Math.max.apply(null, input)
}

const multiplyBy = (number) => (input) => {
    console.log('inside multiplyBy, input:', input, ', number:', number);
    return input * number
}

// add entities to dataPoint
dataPoint.addEntities({
    // <EntityType> must refer to either a built-in type like 'model' 
    // or a custom entity type. 

    // <EntityId> should be unique for each type

    // '<EntityType>:<EntityId>': { ... },

    'reducer:foo': ['$a.b.c', getMax, multiplyBy(10)]
})

dataPoint
    .resolve('reducer:foo', input)
    .then((output) => {
        console.log('output:',output);
        assert.equal(output, 30);
    })