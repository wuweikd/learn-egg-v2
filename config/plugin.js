/** @type Egg.EggPlugin */
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
};

