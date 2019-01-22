const DataPoint = require('data-point')
const dataPoint = DataPoint.create()

dataPoint.addEntities({
    'model:getName': {
        value: '$name',
        outputType: 'string'
    }
})

const input = {
    name: 'DataPoint'
}

dataPoint.resolve('model:getName', input)
    .then(output => {
        console.log(output);
        // output -> 'DataPoint'
    })