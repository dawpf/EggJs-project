'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async default() {
    const { ctx, app } = this;
    // ctx.body = 'hi, egg';
    ctx.body = `默认页面返回的数据,当前的开发环境为:${app.config.env}`
  }

  async index() {
    const { ctx, app } = this;
    // ctx.body = 'hi, egg';
    ctx.response.body = this


    // 在自定义的日志打印目录里面 common-error.log就可以看到 thisaa is not defined
    // ctx.response.body = thisaaaaaaa  
  }

  async fetch() {
    const { app, ctx, config } = this;
    const id = ctx.request.query.id;
    ctx.response.body = { name: 'zs', age: 18, id }
  }
}

module.exports = HomeController;
