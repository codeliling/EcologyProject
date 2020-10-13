'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index.html',{});
  }

  async energy() {
    const { ctx } = this;
    await ctx.render('/energy/energy.html',{});
  }

  async country() {
    const { ctx } = this;
    await ctx.render('/energy/country.html',{});
  }

  async hotgraphic() {
    const { ctx } = this;
    await ctx.render('/energy/hot.html',{});
  }

  async basecompare() {
    const { ctx } = this;
    await ctx.render('/energy/base-compare.html',{});
  }

  async flour() {
    const { ctx } = this;
    await ctx.render('/energy/flour.html',{});
  }

  async itemcompare(){
    const { ctx } = this;
    await ctx.render('/energy/item-compare.html',{});
  }

  async areabuildings(){
    const { ctx } = this;
    await ctx.render('/energy/area-buildings.html',{});
  }

  async face(){
    const { ctx } = this;
    await ctx.render('/energy/face.html',{});
  }

  async mine() {
    const { ctx } = this;
    await ctx.render('/mine/mine.html',{});
  }

  async water() {
    const { ctx } = this;
    await ctx.render('/mine/water.html',{});
  }

  async air() {
    const { ctx } = this;
    await ctx.render('/mine/air.html',{});
  }

  async dust() {
    const { ctx } = this;
    await ctx.render('/mine/dust.html',{});
  }

  async noise() {
    const { ctx } = this;
    await ctx.render('/mine/noise.html',{});
  }

  async safetyproduction(){
    const { ctx } = this;
    await ctx.render('/mine/safety-production.html',{});
  }

  async geologicaldisaster(){
    const { ctx } = this;
    await ctx.render('/mine/geological-disaster.html',{});
  }

  async dynamicevaluate(){
    const { ctx } = this;
    await ctx.render('/mine/dynamic-evaluate.html',{});
  }

  async envprotect(){
    const { ctx } = this;
    await ctx.render('/mine/env-protect.html',{});
  }
}

module.exports = HomeController;
