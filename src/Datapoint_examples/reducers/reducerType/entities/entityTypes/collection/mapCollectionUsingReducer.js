const DataPoint = require('data-point');

const dataPoint = DataPoint.create();

dataPoint.addEntities({
    'request:getOrgRepositories': {
        // url: 'https://api.github.com/orgs/nodejs/repos',
        url: 'https://jsonplaceholder.typicode.com/users/',
        options: () => ({ headers: { 'User-Agent': 'request' } })
    },
    'request:getLatestTag': {
        // here we are injecting the current acc.value 
        // that was passed to the request
        url: () => 'https://api.github.com/repos/nodejs/clear/tags',
        options: () => ({ headers: { 'User-Agent': 'request' } })
    },
    'collection:getRepositoryLatestTag': {
        // magic!! here we are telling it to map each 
        // repository.name to a request:getLatestTag, and return the entire source
        map: '$name | request:getLatestTag'
    }
})

dataPoint
    .resolve('request:getOrgRepositories | collection:getRepositoryLatestTag', {})
    .then(output => {
        console.log('output:', output);
    });