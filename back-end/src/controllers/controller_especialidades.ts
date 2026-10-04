import type { Request, Response } from "express";
import { logger } from "../config/winston";
import { serviceEspecialidades } from "../services/service_especialidades";

// Controller responsável pelo cadastro de especialidades médicas
export const controllerEspecialidades = async (req: Request, res: Response) => {
    try{
        logger.info("Iniciando processo de registro dos dados de especialidade médica...");

        const { nome } = req.body;

        const resposta = await serviceEspecialidades(nome);

        return res.status(201).json(resposta);
    }catch(err: any){
        if(err.message === "Especialidade médica já cadastrada"){
            logger.warn(err.message);

            return res.status(400).json(
                {
                    message: err.message
                }
            )
        }

        logger.error("Erro de servidor ao requisitar inserção de dados de especialidade médica", {
            error: err
        });

        return res.status(500).json(
            {
                message: "Erro de servidor ao requisitar inserção de dados de especialidade médica"
            }
        );
    }
}