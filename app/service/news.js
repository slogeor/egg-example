'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async list() {
    const idList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1', time: '1573963249' },
        { id: 2, title: 'this is news 2', url: '/news/2', time: '1573963249' },
      ],
    };
    return idList.list;
  }
}

module.exports = NewsService;
