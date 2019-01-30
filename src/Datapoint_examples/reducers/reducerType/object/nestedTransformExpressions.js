const DataPoint = require('data-point');
const dataPoint = DataPoint.create();

const inputData = {
    a: {
        a: 1,
        b: 2
    }
}

const objectReducer = {
    x: [
        '$a',
        // this comes second, so it's resolved
        // against the output from the '$a' transform
        {
            a: '$a'
        }
    ],
    // y: [
    //     // this comes first, so it's resolved
    //     // against the main input to objectReducer
    //     {
    //         a: '$a'
    //     },
    //     '$a'
    // ]
}

dataPoint
    .resolve(objectReducer, inputData)
    .then(output => {
        console.log('output;', output);
    });