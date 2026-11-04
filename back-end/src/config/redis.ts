import { createClient } from "redis";
import { env } from "./env";
import { logger } from "./winstron";

export const redis = createClient(
    {
        url: env.url_redis
    }
);

redis.on("error", (err) => {
    logger.error("Erro ao conectar redis", {
        error: err
    });
});

redis.on("connect", () => {
    logger.info("Redis conectado")
})