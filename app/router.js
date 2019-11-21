'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/user', controller.user.info);
  router.get('/newUser/show', controller.newUser.show);
  router.get('/http/get', controller.httpTest.get);
  router.get('/http/post', controller.httpTest.post);
};
