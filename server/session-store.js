function getRedisSessionId(sid) {
  return `ssid:${sid}`;
}

class RedisSessionStore {
  constructor(client) {
    this.client = client;
  }
  // 获取Redis中存储的数据
  async get(sid) {
    const id = getRedisSessionId(sid);
    console.log("get session", id);
    const data = await this.client.get(id);

    if (!data) {
      return null;
    }

    try {
      // 获取的时候变JSON对象
      const res = JSON.parse(data);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  // 存储session数据到Redis
  async set(sid, sess, ttl) {
    const id = getRedisSessionId(sid);
    console.log("set session", id);

    if (typeof ttl === "number") {
      // 传入到数据库中需要转化 成秒
      ttl = Math.ceil(ttl / 1000);
    }

    try {
      // 存进来变字符串
      const sessStr = JSON.stringify(sess);

      if (ttl) {
        await this.client.setex(id, ttl, sessStr);
      } else {
        await this.client.set(id, sessStr);
      }
    } catch (error) {
      console.log(error);
    }
  }
  // 要从Redis中删除 某个session
  async destroy(sid) {
    const id = getRedisSessionId(sid);
    console.log("destroy session", id);

    await this.client.del(id);
  }
}

module.exports = RedisSessionStore;
