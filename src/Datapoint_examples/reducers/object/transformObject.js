const DataPoint = require('data-point');
const dataPoint = DataPoint.create();

const inputData = {
    x: {
        y: {
            z: 2
        }
    }
}

const objectReducer = {
    y: '$x.y',
    zPlusOne: ['$x.y.z', (input) => {
        console.log('input:', input);
        return input + 1
    }
    ]
}

dataPoint
    .resolve(objectReducer, inputData)
    .then(output => {
        console.log('output:', output);
    });