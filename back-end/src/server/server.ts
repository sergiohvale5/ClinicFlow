import express from "express";
import helmet from "helmet";
import { limit } from "../config/rateLimit";
import cors from "cors";
import morgan from "morgan";
import { redis } from "../config/redis";
import { logger } from "../config/winston";
import { env } from "../config/dotenv";
import { router } from "../routes/router";

//Configuração dos middlewares globais
const server = express();

server.use(express.json());

server.use(helmet());
server.use(limit);
server.use(cors(
    {
        origin: "",
        methods: "",
        credentials: true
    }
));
server.use(morgan("dev"));

// Registro das rotas da aplicação
server.use("/", router);

//Inicialização do servidor e conexão com o Redis
async function inicializacao() {
    try{
        await redis.connect();

        server.listen(env.port, (err) => {
            if(err){
                logger.error("Erro ao inicializar servidor", {
                    error: err
                });

                return;
            }

            logger.info("Servidor inicializado");
        })
    }catch(err){
        logger.error("Erro de inicialização", {
            error: err
        });

        throw err;
    }
}

inicializacao();