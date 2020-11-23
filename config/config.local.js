console.log('local11111111111111111111111111111111111111111');

/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */

const path = require('path');

module.exports = appInfo => {

  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    // NODE_ENV_MY: appInfo.env === 'local' ? 'NODE_ENV_local11111' : 'NODE_ENV_pro111111',
    // logger: {
    //   dir: path.join(appInfo.baseDir, 'myLogs'),  // 配置自定义日志打印目录为根目录下 /myLogs
    // }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1605779526264_8413';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
