'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const ctx = this.ctx;
    const type = ctx.request.query.type;
    let msg = 'hello world';
    if (type === 'query') {
      msg = await ctx.service.user.query();
    } else if (type === 'update') {
      msg = await ctx.service.user.update();
    } else if (type === 'delete') {
      msg = await ctx.service.user.delete();
    } else if (type === 'add') {
      msg = await ctx.service.user.add();
    }

    ctx.body = msg;
  }
}

module.exports = UserController;
