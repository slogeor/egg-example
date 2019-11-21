'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // 查询
  async query() {
    const user = await this.app.mysql.get('user', { userId: 1111 });
    return { user };
  }

  // 新增
  async add() {
    const user = await this.app.mysql.insert('user', { userId: 222, userName: 'tom' });
    return { user };
  }

  // 更新
  async update() {
    const row = {
      userName: '111Jam',
    };
    const options = {
      where: {
        userId: 1111,
      },
    };
    const user = await this.app.mysql.update('user', row, options);
    return { user };
  }
  // 更新
  async delete() {
    const user = await this.app.mysql.delete('user', { userId: 222 });
    return { user };
  }
}

module.exports = UserService;
