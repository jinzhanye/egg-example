'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    ctx.body = {
      appRpc: await ctx.rpc.test.sayHi('egg'),
      pluginRpc: await ctx.rpc.pluginTest.sayHi('egg'),
    };
  }
}

module.exports = HomeController;
