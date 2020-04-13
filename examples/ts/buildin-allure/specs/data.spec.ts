import * as assert from "assert";

const allure: any = codeceptjs.container.plugins('allure');

Feature('Buildin allure for ts');

const params = new DataTable(["first", "second", "third"]);
params.add([1, "alpha", true]);
params.add([2, "bravo", false]);
params.xadd([3, "charlie", undefined]);

Data(params).Scenario('Parametrized test with labels', (I,current) => {
  allure.feature("Feature example");
  allure.addLabel("owner", current.second);
  assert.ok(current.third);
});

