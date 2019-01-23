const DataPoint = require('data-point');

const dataPoint = DataPoint.create();

dataPoint.addEntities({
    'entry:getRepo': {
        value: 'request:repo'
    },
    'request:extendThis': {
        options: () => ({
            headers: {
                'User-Agent': 'request'
            }
        })
    },
    'request:repo -> request:extendThis': {
        url: 'https://api.github.com/repos/nodejs/nodejs-hu'
    }
});

dataPoint
    .resolve('entry:getRepo', null)
    .then(output => {
        console.log('output:', output);
    });