const DataPoint = require('data-point');

const dp = DataPoint.create();

const Model = DataPoint.entityFactories.Model;
// const Request = DataPoint.entityFactories.Request;
const map = DataPoint.helpers.map;

dp.addEntities({
    'request:PlanetRequest': {
        url: 'https://swapi.co/api/planets/1/'
    }
});

// const PlanetRequest = Request('PlanetRequest', {
//     url: 'https://swapi.co/api/planets/1/'
// });

// const PersonRequest = Request('PersonRequest', {
// 	url: '{value}'
// });

const Planet = Model('Planet', {
    value: [
        PlanetRequest,
        {
            name: '$name',
            residents: ['$residents', map(PersonRequest)]
        }
    ]
})

dp.resolve(Planet, {})
    .then(output => console.log(output));
// dp.resolve('request:PlanetRequest', {})
//     .then(output => console.log(output));