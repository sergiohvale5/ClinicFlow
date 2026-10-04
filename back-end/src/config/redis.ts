import { createClient } from "redis";
import { env } from "./dotenv";
import { logger } from "./winston";

//Configuração do redis
export const redis = createClient(
    {
        url: env.redis_connect
    }
);

redis.on("error", (err) => {
    logger.error("Erro ao conectar redis", {
        error: err
    });
});

redis.on("connect", () => {
    logger.info("Redis connectado");
});