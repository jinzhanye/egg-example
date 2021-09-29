'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(this.app.enum.error.ERR_AUTH);
    console.log(this.app.utils.formatter.random(5));

    // ctx.body = 'hi, egg';
    ctx.body = await ctx.rpc.test.sayHi('egg');
  }
}

module.exports = HomeController;
