import type { Request, Response } from "express";
import { logger } from "../config/winstron";
import { serviceCadastroProcedimento } from "../services/service_cadastro_procedimento";

export const controllerCadastroProcedimento = async (req: Request, res: Response) => {
    try{
        logger.info("Iniciando processo de envio dos dados do cadastro de procedimento ao banco de dados...");

        const {
            nome,
            especialidade_id,
            ativo
        } = req.body;

        const resposta = await serviceCadastroProcedimento(
            nome,
            especialidade_id,
            ativo
        );

        logger.info("Dados enviados");

        return res.status(201).json(
            resposta
        )
    }catch(err: any){
        if(err.message === "Procedimento já cadastrado"){
            logger.warn("Procedimento já cadastrado no banco de dados");

            return res.status(400).json(
                {
                    message: err.message
                }
            )
        }

        logger.error("Erro ao enviar dados do cadastro do procedimento ao banco de dados", {
            error: err
        });

        return res.status(500).json(
            {
                message: "Erro no servidor ao requisitar cadastro de procedimento"
            }
        )
    }
}