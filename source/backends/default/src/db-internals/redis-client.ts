import { createClient } from "redis";

const RedisClientPromise = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
})
  .on("error", (err) => {
      console.error("Redis Client Error:", err.message);
      if (process.env.NODE_ENV === 'development') {
          console.error(err);
      }
  })
  .on("connect", () => {
      if (process.env.NODE_ENV === 'development') {
          console.log("Redis connected successfully");
      }
  })
  .connect()
  .catch(error => {
      console.error('Failed to connect to Redis:', error.message);
      process.exit(1);
  });

export default RedisClientPromise