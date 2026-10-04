import type { Request, Response, NextFunction } from "express";
import { logger } from "../config/winston";
import { schemaEspecialidades } from "../schema/schema_especialidades";

//Validação de dados de especialidades médicas
export const middlewareEspecialidades = async (req: Request, res: Response, next: NextFunction) => {
    logger.info("Iniciando validação dos dados de especilidade médica...");

    const { nome } = req.body;

    const schemaEspecialidadesValidos = schemaEspecialidades.safeParse(
        {
            nome
        }
    );

    if(!schemaEspecialidadesValidos.success){
        logger.error("Dados de especialidade médica inválidos", {
            error: schemaEspecialidadesValidos.error.format()
        });

        return res.status(400).json(
            {
                message: "Requisição do cadastro de especialidade médica inválida"
            }
        );
    }

    logger.info("Dados de especialidade médica válidos");

    next();   
}