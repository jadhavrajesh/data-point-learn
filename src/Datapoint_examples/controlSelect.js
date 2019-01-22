const DataPoint = require('data-point')
const dataPoint = DataPoint.create()

const isEqual = (compareTo) => (input) => {
  return input === compareTo
}

const resolveTo = (newValue) => (input) => {
  return input
}

const throwError = (message) => (input) => {
  throw new Error(message)
}

dataPoint.addEntities({
  'control:fruitPrices': {
    select: [
      { case: isEqual('oranges'), do: resolveTo(0.59) },
      { case: isEqual('apples'), do: resolveTo(0.32) },
      { case: isEqual('bananas'), do: resolveTo(0.48) },
      { case: isEqual('cherries'), do: resolveTo(3.00) },
      { default: throwError('Fruit was not found!! Maybe call the manager?') },
    ]
  }
})

dataPoint.resolve('control:fruitPrices', 'apples').then((output) => {
  console.log(output) // 0.32
});

dataPoint.resolve('control:fruitPrices', 'cherries').then((output) => {
  console.log(output) // 3.00 expensive!! 
});

dataPoint.resolve('control:fruitPrices', 'plum')
  .catch((error) => {
    console.log(error) // Fruit was not found!! Maybe call the manager?
  });