var redis = require("async-redis"),
client = redis.createClient();

var CacheService = {
    getCache: async (key) => {
        return await client.get(key)
    },
    setCache: (key, value, exp = 10) => {
        client.set(key, JSON.stringify(value));
        client.expire(key, exp);
    },
}

module.exports = CacheService
