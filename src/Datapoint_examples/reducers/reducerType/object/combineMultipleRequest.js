const dataPoint = require('data-point').create()

dataPoint.addEntities({
    'request:Planet': {
        url: 'https://swapi.co/api/planets/{value}'
    }
})

const objectReducer = {
    tatooine: ['$tatooine', 'request:Planet'],
    alderaan: ['$alderaan', 'request:Planet']
}

const planetIds = {
    tatooine: 1,
    alderaan: 2
}

dataPoint.resolve(objectReducer, planetIds)
    .then(output => {
        // do something with the aggregated planet data!
        console.log(output);
    })