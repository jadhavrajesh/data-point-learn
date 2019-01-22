const DataPoint = require('data-point');

const dataPoint = DataPoint.create();

const input = 200;

dataPoint.addEntities({
    'model:getParam': {
        value: '$..params.multiplier',
        params: {
            multiplier: 100
        }
    }
});

dataPoint
    .resolve('model:getParam', input)
    .then(output => {
        console.log('output:', output);
    });
