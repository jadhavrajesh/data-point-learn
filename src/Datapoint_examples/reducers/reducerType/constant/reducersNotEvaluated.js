const DataPoint = require('data-point');
const dataPoint = DataPoint.create();
const constant = DataPoint.helpers.constant;

// reducers are not evaluated when defined inside of constants


const input = {
    b: 1
}

// object reducer that contains a path reducer ('$a')
let reducer1 = {
    a: '$b'
}

dataPoint
    .resolve(reducer1, input)
    .then(output => {
        console.log('output 1:',output);
    })

// both the object and the path will be treated as
// constants instead of being used to create reducers
let reducer2 = constant({
    a: '$b'
})

dataPoint
    .resolve(reducer2, input)
    .then(output => {
        console.log('output 2:',output);
    })