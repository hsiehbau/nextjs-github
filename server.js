const Koa = require("koa");
const Router = require("koa-router");
const next = require("next");
const session = require("koa-session");
const Redis = require("ioredis");
// const koaBody = require("koa-body");
// const atob = require("atob");
const auth = require("./server/auth");

const RedisSessionStore = require("./server/session-store");

const dev = process.env.Node_Env !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
// 创建Redis  client
const redis = new Redis();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  // 给cookie加密的字符串
  server.keys = ["memeda lalalal appp"];
  const SESSION_CONFIG = {
    key: "jid",
    // maxAge: 10 * 1000,
    store: new RedisSessionStore(redis)
  };
  server.use(session(SESSION_CONFIG, server));
  // 注意要用到session的后面；；配置处理GitHub OAuth的登录
  auth(server);

  router.get("/a/:id", async ctx => {
    const id = ctx.params.id;
    await handle(ctx.req, ctx.res, {
      pathname: "/a",
      query: { id }
    });
    ctx.respond = false;
  });

  router.get("/api/user/info", async ctx => {
    const user = ctx.session.userInfo;
    if (!user) {
      ctx.status = 401;
      ctx.body = "Need Login";
    } else {
      ctx.body = user;
      ctx.set("Content-Type", "application/json");
    }
  });

  server.use(router.routes());

  server.use(async (ctx, next) => {
    // ctx.cookies.set("id", "userId:wxxxxx", { httpOnly: false });
    ctx.req.session = ctx.session;

    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.listen(3000, () => {
    console.log("app is listening on 3000");
  });
});
