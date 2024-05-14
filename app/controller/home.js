const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg2';
  }

  async render() {
    await this.ctx.render('index.js');
  }
}

module.exports = HomeController;
