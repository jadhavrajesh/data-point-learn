const DataPoint = require('data-point')
const dataPoint = DataPoint.create()
const assert = require('assert')

const toUpperCase = (input) => {
  return input.toUpperCase()
}

dataPoint.addEntities({
  'hash:composeExmple': {
    compose: [{
      'entry:orgInfo': {
        value: 'request:getOrgInfo | hash:OrgInfo'
      },
      'request:getOrgInfo': {
        url: 'https://api.github.com/orgs/{value.org}',
        options: () => ({ headers: { 'User-Agent': 'DataPoint' } })
      },
      'hash:OrgInfo': {
        pickKeys: ['repos_url', 'name'],
        mapKeys: {
          reposUrl: '$repos_url',
          orgName: '$name',
        },
        addValues: {
          info: 'This is a test'
        },
        addKeys: {
          orgName: [`$orgName`, toUpperCase]
        }
      }
    }]
  }
})

const expectedResult = {
  reposUrl: 'https://api.github.com/orgs/nodejs/repos',
  orgName: 'NODE.JS FOUNDATION',
  info: 'This is a test'
}

dataPoint
  .resolve('entry:orgInfo', { org: 'nodejs' })
  .then((output) => {
    assert.deepEqual(output, expectedResult)
  })