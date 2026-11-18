import type { Request, Response } from "express";
import { logger } from "../config/winstron";
import { serviceCadastroMedico } from "../services/service_cadastro_medico";

export const controllerCastroMedico = async (req: Request, res: Response) => {
    try{
        logger.info("Iniciando processo de envio dos dados do cadastro médico ao banco de dados...");

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

        const resposta = await serviceCadastroMedico(
            nome, 
            crm,
            especialidade_id,
            valor_consulta,
            forma_atendimento,
            data_atendimento,
            hora_inicio,
            hora_fim
        );

        logger.info("Dados enviados");

        return res.status(201).json(
            resposta
        )
    }catch(err: any){
        if(err.message === "Médico já cadastrado"){
            logger.warn("Médico já cadastrado no banco de dados")
            
            return res.status(400).json(
                {
                    message: err.message
                }
            )
        }

        logger.error("Erro ao enviar dados do cadastro médico ao banco de dados", {
            error: err
        });

        return res.status(500).json(
            {
                message: "Erro no servidor ao requisitar cadastro médico"
            }
        )
    }
}