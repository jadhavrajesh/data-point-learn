const DataPoint = require('data-point');

const dataPoint = DataPoint.create();

const options = {
    locals: {
        personId: 1
    }
}

dataPoint.addEntities({
    'request:getLuke': {
        url: 'https://swapi.co/api/people/{locals.personId}/'
    }
});

dataPoint
    .resolve('request:getLuke', options)
    .then(output => {
        console.log('output:', output);
    });