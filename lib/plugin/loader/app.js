const path = require('path')

module.exports = class AppLifeCycle {
  constructor(app) {
    this.app = app;
  }

  configDidLoad() {
    // 所有的配置已经加载完毕，可以用来加载应用自定义的文件，初始化自定义的服务

    // 只加载应用目录
    // const enumPaths = path.join(this.app.config.baseDir, 'app/enum');
    // this.app.loader.loadToApp(enumPaths, 'enum');

    // 加载所有的 loadunit
    const rpcPaths = this.app.loader.getLoadUnits().map((unit) => {
      return path.join(unit.path, 'app/rpc')
    });
    console.log(rpcPaths)
    this.app.loader.loadToContext(rpcPaths, 'rpc');
  }
};
