const DataPoint = require('data-point')

dataPoint = DataPoint.create({
    entities: {
        'model:HelloWorld':
        {
            value: input => ({
                hello: 'world'
            })
        }
    }
})

// to reference it we use a string with its registered id
dataPoint.resolve('model:HelloWorld', {})
    .then(value => {
        console.assert(value, {
            hello: 'world'
        })
    })