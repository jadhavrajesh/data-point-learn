const DataPoint = require("data-point");

const dataPoint = DataPoint.create();
const { Model, Request } = DataPoint.entityFactories;

const options = {
    trace: true // <-- set to true to enable tracing, a file will be created
};

// const PersonRequest = Request('PersonRequest', {
//     url: 'https://jsonplaceholder.typicode.com/users/1'
// });

dataPoint.addEntities({
    'request:PlanetRequest': {
        url: 'https://jsonplaceholder.typicode.com/users/1'
    }
});

const PersonModel = Model('PersonModel', {
    value: { name: '$name' },
});

dataPoint
    // .resolve(PersonRequest, {})
    .transform(['request:PlanetRequest', PersonModel], 1, options)
    .then(output => {
        console.log("output:", output);
    });
