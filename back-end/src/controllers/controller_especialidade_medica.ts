import type { Request, Response } from "express";
import { logger } from "../config/winstron";
import { serviceEspecialidadeMedica } from "../services/service_especialidade_medica";

export const controllerEspecialidadeMedica = async (req: Request, res: Response) => {
    try{
        logger.info("Iniciando processo de envio dos dados especialidade médica ao banco de dados...");

        const { 
            nome, 
            ativo 
        } = req.body;

        const resposta = await serviceEspecialidadeMedica(nome, ativo);

        logger.info("Dados enviados");

        return res.status(201).json(
            resposta
        )
    }catch(err: any){
        if(err.message === "Especialidade médica já cadastrada"){
            logger.warn("Especialidade médica já cadastrada no banco de dados")

            return res.status(400).json(
                {
                    message: err.message
                }
            )
        }

        logger.error("Erro ao enviar dados especialidade médica ao banco de dados", {
            error: err
        });

        return res.status(500).json(
            {
                message: "Erro no servidor ao requisitar cadastro de especialidade médica"
            }
        )
    }
}