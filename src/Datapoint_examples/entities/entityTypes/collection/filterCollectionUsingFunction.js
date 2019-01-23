const DataPoint = require('data-point');

const dataPoint = DataPoint.create();

dataPoint.addEntities({
    'request:getOrgRepos': {
        url: 'https://api.github.com/orgs/nodejs/repos',
        options: () => ({
            headers: {
                'User-Agent': 'request'
            }
        }),
    },
    'collection:getRepoUrl': {
        map: '$url',
        filter: (input) => {
            console.log('input:', input);
        }
    },
    'request:getPeoples': {
        url: 'https://swapi.co/api/people/',
        options: () => ({
            headers: {
                'User-Agent': 'request'
            }
        })
    },
    'collection:getHeightGThan150': {
        map: '$url',
        filter: (input) => {
            console.log('input:', input);
        }
    }
})

dataPoint
    // .resolve(['request:getPeoples'], ['request:getHeightGThan150'], {})
    .resolve(['request:getOrgRepos'], ['collection:getRepoUrl'], {})
    .then(output => {
        console.log('output:', output);
    });