const DataPoint = require('data-point');
const dataPoint = DataPoint.create();

const inputData = {
    a: 'A',
    b: 'B',
    c: {
        x: 'X',
        y: 'Y'
    }
}

// some data will move to a higher level of nesting,
// but other data will move deeper into the object
const objectReducer = {
    x: '$c.x',
    y: '$c.y',
    z: {
        a: '$a',
        b: '$b'
    }
}

dataPoint
    .resolve(objectReducer, inputData)
    .then(output => {
        console.log('output:', output);
    });
