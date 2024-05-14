/* eslint valid-jsdoc: "off" */

const { join } = require('node:path');
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
  config.keys = appInfo.name + '_1714287866613_3090';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.websocket = {
    path: '/ws',
  };
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      '.js': 'assets', // 配置模板引擎
    },
  };
  config.assets = {
    devServer: {
      command: 'roadhog server',
      port: 8000,
    },
    templatePath: join(appInfo.baseDir, 'app/view/template.html'),
    templateViewEngine: 'nunjucks',
  };

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  return {
    ...config,
    ...userConfig,
  };
};
