import type { Request, Response, NextFunction } from "express";
import { logger } from "../config/winstron";
import { schemaEspecialidadeMedica } from "../schemas/schema_especialidade_medica";

export const middlewareEspecialidadeMedica = (req: Request, res: Response, next: NextFunction) => {
    logger.info("Iniciando validação dos dados especialidade medica...");

    const { 
        nome, 
        ativo 
    } = req.body;

    const dadosEspecialidadeMedica = schemaEspecialidadeMedica.safeParse(
        {
            nome,
            ativo
        }
    );

    if(!dadosEspecialidadeMedica.success){
        logger.error("Dados especialidade médica inválidos", {
            error: dadosEspecialidadeMedica.error.format()
        });

        return res.status(400).json(
            {
                message: "Requisição de cadastro dos dados de especialidade médica inválida"
            }
        )
    }

    logger.info("Dados válidos");

    next();
}   