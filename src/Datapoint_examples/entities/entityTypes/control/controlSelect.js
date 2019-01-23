const DataPoint = require('data-point');

const dataPoint = DataPoint.create();

const isEqual = (compareTo) => (input) => {
    console.log(input, '===', compareTo);
    return input === compareTo;
}

const resolveTo = (newValue) => (input) => {
    return input;
}

const throwError = (message) => (input) => {
    throw new Error(message);
}

dataPoint.addEntities({
    'control:carBrandName': {
        select: [
            {
                case: isEqual('Tata'),
                do: resolveTo('Car Brand Found')
            },
            {
                default: throwError('Car Brand Not Found.')
            }
        ]
    }
});

dataPoint
    .resolve('control:carBrandName', 'Tata')
    .then(output => {
        console.log('output:', output)
    });

dataPoint
    .resolve('control:carBrandName', 'XYZ')
    .then(output => {
        console.log('output:', output)
    });