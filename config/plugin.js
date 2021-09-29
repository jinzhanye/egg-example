const path = require('path')

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  myLoader: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/loader'),
  },
};
