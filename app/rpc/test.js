module.exports = class TestRpc {
  constructor(ctx) {
    this.ctx = ctx;
    this.config = ctx.app.config;
    this.logger = ctx.logger;
  }

  async sayHi(name) {
    console.log(this.ctx.app.config.env);
    return `hi, ${name}`;
  }
}
