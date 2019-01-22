const DataPoint = require('data-point');

const dataPoint = DataPoint.create();

const input = {
    a: 1,
    b: 2
}

const reducer = {
    a: '$a',
    b: DataPoint.constant({
        a: '$a',
        b: 5
    })
}

dataPoint
    .resolve(reducer, input)
    .then(output => {
        console.log(output);
    });