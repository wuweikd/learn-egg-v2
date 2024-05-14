/** @type Egg.EggPlugin */
const path = require('node:path');
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  io: {
    enable: true,
    package: 'egg-socket.io',
  },
  websocket: {
    enable: true,
    package: 'egg-websocket-plugin',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  ua: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-ua'),
  },
  assets: {
    enable: true,
    package: 'egg-view-assets',
  },
};

