const DataPoint = require('data-point');

// create datapoint instance
const dp = DataPoint.create();

// reducer function
const reducer = (input) => {
    return input + ' World'
}

// apply reducer to input
dp.resolve(reducer, 'Hello')
    .then((output) => {
        console.log(output);
    });
