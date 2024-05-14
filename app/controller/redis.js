const Controller = require('egg').Controller;


module.exports = () => {
  return class HomeController extends Controller {
    async index() {
      const { ctx, app } = this;
      // set
      await app.redis.set('foo', 'bar');
      // get
      ctx.body = await app.redis.get('foo');
    }
  };
};
