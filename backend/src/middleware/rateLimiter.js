// Import the rate limiter configuration
import ratelimit from "../../config/upstash.js";

// Middleware function to limit the rate of incoming requests
const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit(req.ip); // Limit requests based on the client's IP address
        
        if (!success) {
            // If the request limit is exceeded, respond with a 429 status code
            return res.status(429).json({
                message: "Too many requests from your side.\n Please have some patience\n And take Deep Breath.",
                retryAfter: "15 seconds"
            });
        }
        
        next(); // If the request is within the limit, proceed to the next middleware or route handler

    } catch (error) {
        console.error("Rate limiter error:", error); // Log the error as an error message (often shown in red or sent to stderr)
        next(error); // Call the next middleware with the error to handle it appropriately
    }
}

export default rateLimiter;