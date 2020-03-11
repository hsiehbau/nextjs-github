async function test() {
  const Redis = require("ioredis");
  const redis = new Redis({
    port: 6378,
    password: 123456
  });
  await redis.setex("e", 5, 32154);
  // get keys is 异步操作
  const keys = await redis.keys("*");
  console.log(keys);
}
test();
