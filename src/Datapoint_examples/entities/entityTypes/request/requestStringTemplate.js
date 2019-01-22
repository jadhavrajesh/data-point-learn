const DataPoint = require('data-point')
const dataPoint = DataPoint.create()

dataPoint.addEntities({
    'request:getLuke': {
        url: 'https://swapi.co/api/people/{value.personId}/'
    }
})

const input = {
    personId: 1
}

dataPoint.resolve('request:getLuke', input)
    .then(output => {
        console.log(output);
    })