/* eslint valid-jsdoc: "off" */

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
    },
  };

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  config.redis = {
    client: {
      host: 'redis-16313.c82.us-east-1-2.ec2.redns.redis-cloud.com',
      port: '16313',
      password: 'L1jQOGeWfgzkPty8VkDrpGIWj8p3OKYu', // 测试用，直接明文
      db: 0,
    },
    agent: true,
  };

  return {
    ...config,
    ...userConfig,
  };
};
