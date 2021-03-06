module.exports = class Formatter {
  constructor(app) {
    this.app = app;
    this.config = app.config;
    this.logger = app.logger;
  }

  // 会被挂载为 `app.utils.formatter.random()`
  random(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
};
