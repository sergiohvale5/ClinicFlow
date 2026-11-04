import dotenv from "dotenv";
import { logger } from "./winstron";


dotenv.config();

if(!process.env.HOST_POOL){
    logger.error("A variável de ambiente HOST_POOL é obrigatória");
    throw new Error("HOST_POOL é obrigatória")
}

if(!process.env.PORT_POOL){
    logger.error("A variável de ambiente PORT_POOL é obrigatória");
    throw new Error("PORT_POOL é obrigatória")
}

if(!process.env.USER_POOL){
    logger.error("A variável de ambiente USER_POOL é obrigatória");
    throw new Error("USER_POOL é obrigatória")
}

if(!process.env.PASSWORD_POOL){
    logger.error("A variável de ambiente PASSWORD_POOL é obrigatória");
    throw new Error("PASSWORD_POOL é obrigatória")
}

if(!process.env.DATABASE_POOL){
    logger.error("A variável de ambiente DATABASE_POOL é obrigatória");
    throw new Error("DATABASE_POOL é obrigatória")
}

if(!process.env.URL_REDIS){
    logger.error("A variável de ambiente URL_REDIS é obrigatória");
    throw new Error("URL_REDIS é obrigatória")
}

if(!process.env.PORT_SERVIDOR){
    logger.error("A variável de ambiente PORT_SERVIDOR é obrigatória");
    throw new Error("PORT_SERVIDOR é obrigatória")
}

export const env = {
    //Pool
    host_pool: process.env.HOST_POOL,
    port_pool: process.env.PORT_POOL,
    user_pool: process.env.USER_POOL,
    password_pool: process.env.PASSWORD_POOL,
    database_pool: process.env.DATABASE_POOL,

    //Redis
    url_redis: process.env.URL_REDIS,

    //Servidor
    port_servidor: process.env.PORT_SERVIDOR
}