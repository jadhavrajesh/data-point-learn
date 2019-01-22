const DataPoint = require('data-point');

const dataPoint = DataPoint.create();

// dataPoint.addEntities({
//     'request:getOrgRepositories': {
//         url: 'https://api.github.com/orgs/nodejs/repos',
//         options: () => ({
//             headers: {
//                 'User-Agent': 'request'
//             }
//         })
//     },
//     'collection:getRepositoryTagsUrl': {
//         map: '$tags_url'
//     }
// })

// dataPoint
//     .resolve('request:getOrgRepositories | collection:getRepositoryTagsUrl', {})
//     .then((output) => {
//         console.log(output)
//     })

dataPoint.addEntities({
    'request:getPeoples': {
        url: 'https://swapi.co/api/people/',
        options: () => ({
            headers: {
                'User-Agent': 'request'
            }
        })
    },
    'collection:getResults': {
        map: '$results'
    }
})

dataPoint
    .resolve('request:getPeoples | collection:getResults', {})
    .then((output) => {
        console.log('output;', output)
    })