import { redis } from "../config/redis/upstashConfig.js";

const expiresIn = Number(process.env.REFRESH_TOKEN_MAX_AGE) / 1000;

export const storeRefreshTokenInRedis = async (userId, refreshToken) => {
  await redis.set(`refreshToken:${userId}`, refreshToken, "EX", expiresIn);
};

export const getRefreshTokenFromRedis = async (userId) => {
  const storedRefreshToken = await redis.get(`refreshToken:${userId}`);
  if (!storedRefreshToken) throw new Error("Refresh token not found!");
  return storedRefreshToken;
};

export const removeRefreshTokenFromRedis = async (userId) => {
  await redis.del(`refreshToken:${userId}`);
};
