export default class TestModule {
  constructor() {
    this.test = 'test';
  }

  static logTest(content) {
    window.console.log(content);
  }
}
