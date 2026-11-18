import { logger } from "../config/winstron";
import { repositorieCadastroMedico } from "../repositories/repositorie_cadastro_medico"

export const serviceCadastroMedico = async (
    nome: string, 
    crm: string, 
    especialidade_id: number, 
    valor_consulta: number, 
    forma_atendimento: string,
    data_atendimento: Date, 
    hora_inicio: string, 
    hora_fim: string
) => {
    try{
        const retornoQueryMedico = await repositorieCadastroMedico(
            nome, 
            crm, 
            especialidade_id, 
            valor_consulta, 
            forma_atendimento,
            data_atendimento, 
            hora_inicio, 
            hora_fim
        );

        if(!retornoQueryMedico){
            logger.warn("Nenhum dado médico cadastrado");

            return {
                message: "Nenhum dado médico cadastrado"
            }
        }

        return {
            message: "Cadastro médico realizado"
        }
    }catch(err: any){
        if(err.code === "23505"){
            throw new Error("Médico já cadastrado");
        }

        throw err;
    }
}