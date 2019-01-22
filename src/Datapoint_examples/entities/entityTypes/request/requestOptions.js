const DataPoint = require('data-point');
const dataPoint = DataPoint.create();

const input = {
    searchTerm: 'r2'
}

dataPoint.addEntities({
    url: 'https://swapi.co/api/people',
    options: {
        'content-type': DataPoint.constant('application/json'),
        'request:searchPeople:': {
            qs: '$searchTerm'
        }
    }
});

dataPoint
    .resolve('request:searchPeople', input)
    .then(output => {
        console.log('output:', output);
    });