const axios = require("axios");
const config = require("../config");
const { client_id, client_secret, request_token_url } = config.github;

module.exports = server => {
  server.use(async (ctx, next) => {
    // 是auth就对code进行处理，不是auth就丢给下一个中间件处理
    if (ctx.path === "/auth") {
      const code = ctx.query.code;
      if (!code) {
        ctx.body = "code not exist";
        return;
      }
      // 根据code获取用户的token,发送一个post请求
      const result = await axios({
        method: "post",
        url: request_token_url,
        data: {
          client_id,
          client_secret,
          code
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        proxy: false
      });

      console.log(result.status, result.data);

      if (result.status === 200 && result.data && !result.data.error) {
        ctx.session.githubAuth = result.data;

        const { access_token, token_type } = result.data;
        const userInfoResp = await axios({
          method: "GET",
          url: "https://api.github.com/user",
          headers: {
            Authorization: `${token_type} ${access_token}`
          }
        });
        // console.log(userInfoResp.data);
        ctx.session.userInfo = userInfoResp.data;
        ctx.redirect((ctx.session && ctx.session.urlBeforeOAuth) || "/");
        // 用完记得清空
        ctx.session.urlBeforeOAuth = "";
        //  到这一步就完成去GitHub进行oauth，获取code，然后换取token进而得到用户信息的过程
        const errorMsg = result.data && result.data.error;

        ctx.body = `request token failed: ${errorMsg}`;
      }
    } else {
      await next();
    }
  });

  server.use(async (ctx, next) => {
    // const { path, method } = ctx;
    const path = ctx.path;
    const method = ctx.method;
    if (path === "/logout" && method === "POST") {
      ctx.session = null;
      ctx.body = `logout success`;
    } else {
      await next();
    }
  });

  server.use(async (ctx, next) => {
    const { path, method } = ctx;

    if (path === "/prepare-auth" && method === "GET") {
      const { url } = ctx.query;
      ctx.session.urlBeforeOAuth = url;
      ctx.body = "ready";
      // ctx.redirect(config.OAUTH_URL);
    } else {
      await next();
    }
  });
};
