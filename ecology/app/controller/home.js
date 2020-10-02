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
}

module.exports = HomeController;
