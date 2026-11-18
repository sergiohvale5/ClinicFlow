import type { Request, Response, NextFunction } from "express";
import { logger } from "../config/winstron";
import { shemaCadastroProcedimento } from "../schemas/schema_cadastro_procedimento";

export const middlewareCadastroProcedimento = (req: Request, res: Response, next: NextFunction) => {
    logger.info("Iniciando processo de validação dos dados do cadastro de procedimento...");

    const {
        nome,
        especialidade_id,
        ativo
    } = req.body;

    const dadosProcedimentoMedico = shemaCadastroProcedimento.safeParse(
        {
            nome,
            especialidade_id,
            ativo
        }
    );

    if(!dadosProcedimentoMedico.success){
        logger.warn("Dados de cadastro de procedimento inválidos", {
            error: dadosProcedimentoMedico.error.format()
        });

        return res.status(400).json(
            {
                message: "Requisição de cadastro de procedimento inválida"
            }
        );
    }

    logger.info("Dados do cadastro médico válidos");

    next();
}