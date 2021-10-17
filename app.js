class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  configWillLoad() {
    // console.log(this.app.logger)

    // 此时 config 文件已经被读取并合并，但是还并未生效
    // 这是应用层修改配置的最后时机
    // const middlewares = [ // 框架预制的中间件
    //   'frameworkApiErrorHandler',
    //   'frameworkRequestLogger',
    // ]
    // this.app.config.coreMiddleware.push(...middlewares) // 将中间件添加到egg中间件列表
  }

  configDidLoad() {
    // console.log('2222', this.app.config)
    // console.log(123123)
  }

  async didLoad() {
    // 所有的配置已经加载完毕
    // 可以用来加载应用自定义的文件，启动自定义的服务
  }

  async willReady() {
    // 所有的插件都已启动完毕，但是应用整体还未 ready
    // 可以做一些数据初始化等操作，这些操作成功才会启动应用
  }

  async didReady() {
    // 应用已经启动完毕
    // this.app.router.get('/info', infoRouter);
  }

  async serverDidReady() {
    // http / https server 已启动，开始接受外部请求
    // 此时可以从 app.server 拿到 server 的实例
  }
}

module.exports = AppBootHook;
