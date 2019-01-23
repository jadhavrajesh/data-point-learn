const DataPoint = require('data-point');

// creaet instance
const dataPoint = DataPoint.create();

// add entities to dataPoint
dataPoint.addEntities({
    'request:getLuke': {
        url: 'https://swapi.co/api/people/1/'
        // url: 'https://jsonplaceholder.typicode.com/users/1'
    }
})


dataPoint
    .resolve('request:getLuke', {})
    .then(output => {
        console.log('output:', output);
    })