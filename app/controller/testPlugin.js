// app/controller/news.js
const Controller = require('egg').Controller;

class TestPlugin extends Controller {
  async isIOS() {
    const ctx = this.ctx;
    ctx.body = ctx.isIOS;
  }
}

module.exports = TestPlugin;
