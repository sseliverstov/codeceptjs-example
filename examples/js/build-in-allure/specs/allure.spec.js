const allure = codeceptjs.container.plugins('allure');

Feature('Build-in allure for js-spec');

Scenario('passed test with labels', (I) => {
    allure.feature("Feature example");
    allure.addLabel("owner", "eroshenkoam");
    I.passedStep();
});

