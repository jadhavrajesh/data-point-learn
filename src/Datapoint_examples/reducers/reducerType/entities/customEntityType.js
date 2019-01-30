const _ = require('lodash')

const DataPoint = require('data-point')

// Entity Class
// function RenderTemplate() { }
class RenderTemplate { }

/**
* Entity Factory
* @param {*} spec - Entity Specification
* @param {string} id - Entity id
* @return {RenderTemplate} RenderTemplate Instance
*/
function create(spec, id) {
    console.log('spec:', spec, ' id:', id);
    console.log('\n\n----------\n\n');
    // create an entity instance
    const entity = new RenderTemplate()
    entity.spec = spec
    entity.resolve = resolve
    // set/create template from spec.template value
    entity.template = _.template(_.defaultTo(spec.template, ''))
    console.log('entity:', entity);
    console.log('\n\n--------------------\n\n');
    return entity
}

/**
* Resolve entity
* @param {Accumulator} accumulator
* @param {function} resolveReducer
* @return {Promise}
*/
function resolve(accumulator, resolveReducer) {
    console.log('accumulator:', accumulator, '\n\n resolveReducer:', resolveReducer);
    // get Entity Spec
    const spec = accumulator.reducer.spec
    // execute lodash template against
    // accumulator value
    const value = spec.template(accumulator.value)
    // set new accumulator.value
    // this method creates a new acc object
    const result = Object.assign({}, accumulator, {
        value
    })
    console.log('\n\n----------\n\n result:\n\n', result, '\n\n----------\n\n');
    return result
}

/**
* RenderEntity API
*/
const RenderEntity = DataPoint.createEntity('render', create, resolve)

// Create DataPoint instance
const dataPoint = DataPoint.create({
    // custom entity Types
    entityTypes: {
        // adds custom entity type 'render'
        render: RenderEntity
    },

    entities: {
        // uses new custom entity type
        'render:HelloWorld': {
            value: '$user',
            template: '<h1>Hello <%= name %>!!</h1>'
        }
    }
})

const input = {
    user: {
        name: 'World'
    }
}

dataPoint
    .resolve('render:HelloWorld', input)
    .then((output) => {
        console.log('output:', output);
        // assert.strictEqual(output, '<h1>Hello World!!</h1>')
    })