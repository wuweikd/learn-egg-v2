/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  // 配置socket

  app.ws.route('/ws', app.controller.ws.index);
};
