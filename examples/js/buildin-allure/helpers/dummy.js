const Helper = codecept_helper;
const assert = require('assert');

class Dummy extends Helper {
  async passedStep() {}
  async failedStep() {
    assert(false);
  }
}

module.exports = Dummy;
