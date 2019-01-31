const DataPoint = require('data-point');

const { Model } = DataPoint.entityFactories;
const dataPoint = DataPoint.create();

dataPoint.use('before', (acc, next) => {
    console.log(acc, next);
    console.log(`Entity ${acc.reducer.id} is being called`)
    next();
});

dataPoint.use('after', (acc, next) => {
    console.log(acc, next);
    console.log(`Entity ${acc.reducer.id} was called`)
    next();
});

const MyModel = Model('MyModel', {
    value: () => 'new value'
});

dataPoint
    .resolve(MyModel, true)
    .then(output => {
        console.log(output);
    });
