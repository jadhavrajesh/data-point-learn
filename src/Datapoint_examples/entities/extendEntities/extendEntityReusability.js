const DataPoint = require('data-point');

const dataPoint = DataPoint.create();

dataPoint.addEntities({
    'entry:multiply': {
        value: {
            multiplyBy: '$multiplier | entry:multiplyBy',
            multiplyBy10: '$multiplier | entry:multiplyBy10',          
        }
    },
    // 'hash:multiply': {
    //     mapKeys: {
    //         multiplyBy: '$multiplier | entry:multiplyBy',
    //         // multiplyBy10: 10
    //     }
    // },
    'entry:multiplyBy': {
        value: (input, acc)=>{            
            return input * acc.params.mutiplicand;
        },
        params: {
            mutiplicand: 5
        }
    },
    'entry:multiplyBy10 -> entry:multiplyBy': {
        params: {
            mutiplicand: 2
        }
    }
});

dataPoint
    // .resolve('hash:multiply', { multiplier: 10 })
    .resolve('entry:multiply', { multiplier: 10 })
    .then(output => {
        console.log('output:', output);
    });