'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async default() {
    const { ctx, app } = this;
    // ctx.body = 'hi, egg';
    ctx.body = '默认页面返回的数据'
  }

  async index() {
    const { ctx, app } = this;
    // ctx.body = 'hi, egg';
    ctx.response.body = this
  }

  async fetch() {
    const { app, ctx, config } = this;
    const id = ctx.request.query.id;
    ctx.response.body = { name: 'zs', age: 18, id }
  }
}

module.exports = HomeController;
