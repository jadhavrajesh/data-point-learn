const DataPoint = require('data-point');
const dataPoint = DataPoint.create();

const assert = require('assert');

dataPoint.addEntities({
    'hash:composeExmple': {
        compose: [
            {
                addValues: {
                    reposUrl: '/orgs/nodejs/repos',
                    eventsUrl: '/orgs/nodejs/events'
                }
            },
            {
                addKeys: {
                    urlData: input => {
                        console.log('input:', input);
                        return [input.reposUrl, input.eventsUrl]
                    }
                }
            },
            {
                omitKeys: ['reposUrl', 'eventsUrl']
            }
        ]
    }
})

const input = {
    orgName: 'Node.js Foundation'
}

const expectedResult = {
    orgName: 'Node.js Foundation',
    urlData: ['/orgs/nodejs/repos', '/orgs/nodejs/events']
}

dataPoint
    .resolve('hash:composeExmple', input)
    .then(output => {
        console.log('---------');
        console.log('output:', output);
        assert.deepStrictEqual(output, expectedResult)
    })