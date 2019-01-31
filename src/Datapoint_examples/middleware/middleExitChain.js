const DataPoint = require("data-point");
const assert = require("assert");

const { Model } = DataPoint.entityFactories;
const dataPoint = DataPoint.create();

dataPoint.use("before", (acc, next) => {
  console.log("Entity model:MyModel is being called");
  next();
});

dataPoint.use("before", (acc, next) => {
  console.log("hijacking");
  next(null, "hijacked");
});

dataPoint.use("before", (acc, next) => {
  console.log("never got here");
  next();
});

const MyModel = Model("MyModel", {
  value: () => {
    // this will not be executed because the entity was hijacked
    console.log("processing");
    return "hello";
  }
});

dataPoint.resolve(MyModel, true).then(value => {
  console.log("value:", value);
  // assert.strictEqual(value, 'hijacked')
});
