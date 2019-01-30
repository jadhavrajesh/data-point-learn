const DataPoint = require('data-point');
const constant = DataPoint.helpers.constant;
const dataPoint = DataPoint.create();

const input = {
    searchTerm: 'r2'
}

dataPoint.addEntities({
    'request:searchPeople': {
        url: 'https://swapi.co/api/people',
        options: {
            'content-type': constant('application/json'),
            qs: {
                search: '$searchTerm'
            }
        }
    }
});

dataPoint
    .resolve('request:searchPeople', input)
    .then(output => {
        console.log('output:', output);
    });