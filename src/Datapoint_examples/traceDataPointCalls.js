const DataPoint = require('data-point');

const dataPoint = DataPoint.create();

const options = {
    trace: true // <-- set to true to enable tracing, a file will be created
}

const Model = DataPoint.entityFactories.Model;
const Request = DataPoint.entityFactories.Request;

const PersonRequest = Request('PersonRequest', {
    url: 'https://swapi.co/api/people/1/'
})

const PersonModel = Model('PersonModel', {
    value: {
        name: '$name',
        birthYear: '$birth_year'
    }
})

dataPoint
    .transform([PersonRequest, PersonModel], 1, options)
    // .transform('request:GetRepo', 1, options)
    // .resolve('request:GetRepo', {}, {})
    .then(output => {
        console.log('output:', output);
    })
