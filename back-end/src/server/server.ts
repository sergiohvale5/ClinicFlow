import express from "express";
import helmet from "helmet";
import { limit } from "../config/rateLimit";
import cors from "cors";
import morgan from "morgan";
import type { Request, Response } from "express";
import { redis } from "../config/redis";
import { logger } from "../config/winston";
import { env } from "../config/dotenv";

//Configuração do servidor express e implementação de medidas de segurança
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

//Estrutura da api rest
server.get("/teste", (req: Request, res: Response) => {
    res.status(200).json(
        {
            message: "Api funcionando"
        }
    );
});

//Inicialização do sevidor e do redis
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