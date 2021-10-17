/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1632545301886_1798';

  // add your middleware config here
  config.middleware = [];

  config.customLoader = {
    utils: {
      directory: 'app/utils',
      inject: 'app',
    },
    // rpc: {
    //   directory: 'app/rpc',
    //   inject: 'ctx',
    // },
  }

  // add your user config here
  const userConfig = {
    myAppName: 'bbq',
  };

  return {
    ...config,
    ...userConfig,
  };
};
