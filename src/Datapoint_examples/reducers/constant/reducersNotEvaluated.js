const DataPoint = require('data-point');
const dataPoint = DataPoint.create();

// reducers are not evaluated when defined inside of constants


const input = {
    b: 1
}

// object reducer that contains a path reducer ('$a')
let reducer = {
    a: '$b'
}

dataPoint
    .resolve(reducer, input)
    .then(output => {
        console.log(output);
    })

// both the object and the path will be treated as
// constants instead of being used to create reducers
reducer = DataPoint.constant({
    a: '$b'
})

dataPoint
    .resolve(reducer, input)
    .then(output => {
        console.log(output);
    })