// This file configures Upstash Redis and Ratelimit for rate limiting in a Node.js application
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

// Import dotenv to manage environment variables
import dotenv from "dotenv";
dotenv.config();

// Create a Redis client instance using credentials from .env
const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN
});

// Create a rate limiter that allows 7 requests per 15 seconds per client
const ratelimit = new Ratelimit({
    redis, // Use the Redis client for storing rate limit data
    limiter: Ratelimit.slidingWindow(7, "15 s"),
    analytics: true, // Enable analytics for monitoring rate limit usage
});

export default ratelimit;