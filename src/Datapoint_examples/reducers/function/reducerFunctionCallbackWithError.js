const DataPoint = require('data-point');
const assert = require('assert');

const dataPoint = DataPoint.create();

const reducer = (input, acc, next) => {
    // next takes err, value    
    next(new Error('Error!!!'));
}

dataPoint    
    .transform(reducer, 'Hello')
    .catch(err => {
        console.assert(err instanceof Error);
        console.log(err.toString());
    });
    