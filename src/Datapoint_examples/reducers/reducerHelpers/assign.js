const DataPoint = require('data-point');
const dataPoint = DataPoint.create();

// assign reducer creates a new Object by resolving the 
// provided Reducer and merging the result with the 
// current accumulator value. 
// It uses Object.assign internally.
const assign = DataPoint.helpers.assign;

const input = {
    a: 1,
    b: {
        c: 2
    }
}

// merges the object reducer with
// accumulator.value
const reducer = assign({
    c: '$b.c',
    d: ()=> 10
})

dataPoint
    .resolve(reducer, input)
    .then(output => {
        console.log('output:', output);
    })