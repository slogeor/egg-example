'use strict';

const Controller = require('egg').Controller;

class HttpTestController extends Controller {
  async get() {
    const ctx = this.ctx;
    // 示例：请求一个 npm 模块信息
    const result = await ctx.curl('https://api.blibee.com/product-api/product/shop/config/v1', {
      // 自动解析 JSON response
      dataType: 'json',
      // 3 秒超时
      timeout: 3000,
    });

    ctx.body = {
      status: result.status,
      headers: result.headers,
      package: result.data,
    };
  }

  async post() {
    const ctx = this.ctx;
    const result = await ctx.curl('https://api.blibee.com/order-api/meepo/cms/user/page_content/v1', {
      // 必须指定 method
      method: 'POST',
      // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
      contentType: 'json',
      headers: {
        ws_user_id:	30005442043591,
        ws_wxapp_ver: '13.11.07',
        ws_pid: 60021,
        token: 'jMZINRXYMb42Ls8Z4jqyI_y0bHFPuni3jH8WkUNQl9hNflmZZKQbXbJnq51wu6akDd-_-H9sqsFy6nyEJ86Bm5hq6rg_v1BlM43nmiILcV4ZzUke4z8_t_miJDBU5EeUkJAmYPqskUjao8dbTx-p-LaW4O68gmb5CmhIVHRz910=',
      },
      data: {
        pageName: 'exchange_coupon',
      },
      // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
      dataType: 'json',
    });
    ctx.body = result.data;
  }
}

module.exports = HttpTestController;
