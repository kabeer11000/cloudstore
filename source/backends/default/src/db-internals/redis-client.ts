import { createClient } from "redis";

const RedisClientPromise = createClient()
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();

export default RedisClientPromise