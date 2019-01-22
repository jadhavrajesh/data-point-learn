const DataPoint = require('data-point');

const dataPoint = DataPoint.create();

dataPoint.addEntities({
    'request:getLuke': {
        url: 'https://swapi.co/api/people/1/'
    }
})

dataPoint.resolve('request:getLuke', {})
    .then(output => {
        console.log('output:', output);
    })