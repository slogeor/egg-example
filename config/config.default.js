/* eslint valid-jsdoc: "off" */

'use strict';

// const path = require('path');

/**
 * mysql 的配置项
 */
// const mysqlConfig = {
//   // 单数据库信息配置
//   client: {
//     // host
//     host: '127.0.0.1',
//     // 端口号
//     port: '3306',
//     // 用户名
//     user: 'root',
//     // 密码
//     password: 'fehelper',
//     // 数据库名
//     database: 'mytest',
//   },
//   // 是否加载到 app 上，默认开启
//   app: true,
//   // 是否加载到 agent 上，默认关闭
//   agent: false,
// };

/**
 * view 的配置项
 */
const viewConfig = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

/**
 * sequelize 配置项
 */
const sequelizeConfig = {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  // 密码
  password: 'fehelper',
  database: 'egg-sequelize-doc-default',
};

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
  config.keys = appInfo.name + '_1573959749305_8161';

  // add your middleware config here
  config.middleware = [];

  config.view = viewConfig;

  // config.mysql = mysqlConfig;

  config.sequelize = sequelizeConfig;

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
