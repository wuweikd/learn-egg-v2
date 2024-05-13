/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, ws } = app;
  router.get('/', controller.home.index);
  // 配置socket

  ws.route('/ws', controller.ws.index);

  router.get('/news', controller.news.list);

  router.get('/isIOS', controller.testPlugin.isIOS);

};
