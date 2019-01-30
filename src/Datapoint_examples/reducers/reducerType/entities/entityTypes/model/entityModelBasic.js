const DataPoint = require('data-point');
const assert = require('assert');

const dataPoint = DataPoint.create();

const input = {
    a: {
        b: {
            c: [1, 2, 3]
        }
    }
}

const getMax = (input) => {
    return Math.max.apply(null, input);
}

const multiplyBy = (number) => (input) => {
    return input * number;
}

// Using the `value` property to transform an input

dataPoint.addEntities({
    'model:foo': {
        value: ['$a.b.c', getMax, multiplyBy(10)]
    }
})

dataPoint
    .resolve('model:foo', input)
    .then((output) => {
        assert.equal(output, 30)
    })