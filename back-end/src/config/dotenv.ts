import dotenv from "dotenv";
import { logger } from "./winston";

dotenv.config();

//Validação das variáveis de ambiente

if(!process.env.POOL_HOST){
    logger.error("POOL_HOST é obrigatório");
    throw new Error("A variável de ambiente POOL_HOST é obrigatória");
}

if(!process.env.POOL_PORT){
    logger.error("POOL_PORT é obrigatório");
    throw new Error("A variável de ambiente POOL_PORT é obrigatória");
}

if(!process.env.POOL_USER){
    logger.error("POOL_USER é obrigatório");
    throw new Error("A variável de ambiente POOL_USER é obrigatória");
}

if(!process.env.POOL_PASSWORD){
    logger.error("POOL_PASSWORD é obrigatório");
    throw new Error("A variável de ambiente POOL_PASSWORD é obrigatória");
}

if(!process.env.POOL_DATABASE){
    logger.error("POOL_DATABASE é obrigatório");
    throw new Error("A variável de ambiente POOL_DATABASE é obrigatória");
}

if(!process.env.REDIS_CONNECT){
    logger.error("REDIS_CONNECT é obrigatório");
    throw new Error("A variável de ambiente REDIS_CONNECT é obrigatória");
}

if(!process.env.PORT){
    logger.error("PORT é obrigatório");
    throw new Error("A variável de ambiente PORT é obrigatória");
}

export const env = {
    //Pool
    pool_host: process.env.POOL_HOST,
    pool_port: process.env.POOL_PORT,
    pool_user: process.env.POOL_USER,
    pool_password: process.env.POOL_PASSWORD,
    pool_database: process.env.POOL_DATABASE,

    //Redis
    redis_connect: process.env.REDIS_CONNECT,

    //Port
    port: process.env.PORT
}