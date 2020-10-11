'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/energy', controller.home.energy);
  router.get('/energy/country', controller.home.country);
  router.get('/energy/hotgraphic', controller.home.hotgraphic);
  router.get('/energy/basecompare', controller.home.basecompare);
  router.get('/energy/flour', controller.home.flour);
  router.get('/energy/buildings', controller.home.buildings);
  router.get('/energy/face', controller.home.face);

  router.get('/mine', controller.home.mine);
  router.get('/mine/water', controller.home.water);
  router.get('/mine/air', controller.home.air);
  router.get('/mine/dust', controller.home.dust);
  router.get('/mine/noise', controller.home.noise);
  router.get('/mine/safetyproduction', controller.home.safetyproduction);
  router.get('/mine/geologicaldisaster', controller.home.geologicaldisaster);
  router.get('/mine/dynamicevaluate', controller.home.dynamicevaluate);
  router.get('/mine/envprotect', controller.home.envprotect);
};
