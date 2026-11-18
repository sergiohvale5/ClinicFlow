import type { Request, Response, NextFunction } from "express";
import { logger } from "../config/winstron";
import { shemaCadastroMedico } from "../schemas/schema_cadastro_medico";

export const middlewareCadastroMedico = async (req: Request, res: Response, next: NextFunction) => {
    logger.info("Iniciando processo de validação dos dados do cadastro médico...");

    const { 
        nome, 
        crm,
        especialidade_id,
        valor_consulta,
        forma_atendimento,
        data_atendimento,
        hora_inicio,
        hora_fim
    } = req.body;

    const dadosCadastroMedico = shemaCadastroMedico.safeParse(
        {
            nome, 
            crm,
            especialidade_id,
            valor_consulta,
            forma_atendimento,
            data_atendimento,
            hora_inicio,
            hora_fim
        }
    );

    if(!dadosCadastroMedico.success){
        logger.warn("Dados do cadastro médico inválidos", {
            error: dadosCadastroMedico.error.format()
        });

        return res.status(400).json(
            {
                message: "Requisição de cadastro médico inválida"
            }
        )
    }

    logger.info("Dados do cadastro médico válidos")

    next();
}