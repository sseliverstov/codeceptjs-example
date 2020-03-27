Feature('Build-in allure for spec in js');

Scenario('simple passed test', (I) => {
    I.passedStep();
});

Scenario('simple failed test', (I) => {
    I.passedStep();
    I.failedStep();
});
