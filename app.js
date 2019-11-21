'use strict';

module.exports = app => {
  app.beforeStart(async () => {
    // 从配置中心获取 MySQL 的配置
    // { host: 'mysql.com', port: '3306', user: 'rooter', password: 'fehelper', database: 'mytest' }
    const mysqlConfig = await app.config.mysql;
    app.database = app.mysql.createInstance(mysqlConfig.client);
  });
};
