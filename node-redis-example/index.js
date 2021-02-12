import Redis from 'ioredis'
const redis = new Redis()

redis.get("name", (err, res) => {
    console.log(res)
})