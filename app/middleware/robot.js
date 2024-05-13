// app/middleware/robot.js
// options === app.config.robot
module.exports = options => {
  return async function robotMiddleware(ctx, next) {
    const source = ctx.get('user-agent') || '';
    // console.log('source========>', source);
    const match = options.ua.some(ua => ua.test(source));
    if (match) {
      ctx.status = 403;
      ctx.message = 'Go away, robot.';
    } else {
      await next();
    }
  };
};

// curl  http://localhost:7001/news -A "Baiduspider" 报错，原因为止
