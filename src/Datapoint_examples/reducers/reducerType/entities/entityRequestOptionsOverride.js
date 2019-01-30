const DataPoint = require('data-point');

const dataPoint = DataPoint.create();

dataPoint.addEntities({
    'request:getPeopleDetail': {
        url: 'https://swapi.co/api/people/1/'
    }
});

const options = {
    entityOverrides: {
        request: {
            params: {
                inspect: true
            }
        }
    }
};

dataPoint
    .resolve('request:getPeopleDetail', {}, options)
    .then(output => {
        console.log('output:', output);
    });
