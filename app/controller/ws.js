const { Controller } = require('egg');

class WsController extends Controller {

  constructor(...args) {
    super(...args);
    this.mockData = {
      direction: 127, // 航向,范围为0-360
      roll: 30, // 横滚，范围为-30-30
      elevation: -10, // 仰角，范围-20-20
    };
    this.setMockData();
  }

  setMockData() {
    console.log('=============setMockData=============');
    let directionFlag = false;
    let rollFlag = false;
    let elevationFlag = false;

    let data = {
      direction: 127, // 航向,范围为0-360
      roll: 30, // 横滚，范围为-30-30
      elevation: -10, // 仰角，范围-20-20
    };
    const control = { direction: true, roll: true, elevation: true };
    const setData = e => {
      data = e;
    };

    setInterval(() => {
      const { direction, roll, elevation } = data;
      if (directionFlag && direction >= 360) {
        directionFlag = false;
      } else if (!directionFlag && direction <= 0) {
        directionFlag = true;
      }
      if (rollFlag && roll >= 30) {
        rollFlag = false;
      } else if (!rollFlag && roll <= -30) {
        rollFlag = true;
      }
      if (elevationFlag && elevation >= 20) {
        elevationFlag = false;
      } else if (!elevationFlag && elevation <= -20) {
        elevationFlag = true;
      }

      setData({
        direction: control.direction ? direction + (directionFlag ? 1 : -1) : direction,
        roll: control.roll ? roll + (rollFlag ? 1 : -1) : roll,
        elevation: control.elevation ? elevation + (elevationFlag ? 1 : -1) : elevation,
      });

      this.mockData = data;
      // console.log('服务端处理完数据', data);

    }, 1000);
  }

  async index() {
    const { ctx } = this;
    if (!ctx.websocket) {
      throw new Error('this function can only be use in websocket router');
    }

    console.log('client connected');
    let inter = null;

    ctx.websocket
      .on('message', msg => {
        if (msg === 'getData') {
          inter = setInterval(() => {
            this.ctx.websocket.send(JSON.stringify(this.mockData));
          }, 1000);
        }
      })
      .on('close', (code, reason) => {
        clearInterval(inter);
        console.log('websocket closed', code, reason);
      });
  }
}

module.exports = WsController;
