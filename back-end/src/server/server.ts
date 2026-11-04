import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { limit } from "../config/limit";
import { redis } from "../config/redis";
import { logger } from "../config/winstron";
import { env } from "../config/env";

const server = express();

server.use(express.json());
server.use(cors(
    {
        credentials: true
    }
));
server.use(morgan("dev"));
server.use(helmet());
server.use(limit);



server.get("/teste", (req: Request, res: Response) => {
    return res.status(200).json(
        {
            Message: "Api funcionando"
        }
    )
})

async function inicializar() {
    try{
        await redis.connect();

        server.listen(env.port_servidor, (err) => {
            if(err){
                logger.error("Erro ao iniciar o servidor: ", {
                    message: err.message,
                    error: err
                });

                return;
            }

            logger.info("Servidor iniciado");
        })
    }catch(err){
        logger.error("Erro ao iniciar aplicação", {
            error: err
        })
    }
}

inicializar();