import { pool } from "../database/connection";

export const repositorieCadastroMedico = async (
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
        const createMedicoQuery = await pool.query(
            `
                INSERT INTO medico(nome, crm, especialidade_id, valor_consulta, forma_atendimento, data_atendimento, hora_inicio, hora_fim)
                VALUES($1, $2, $3, $4, $5, $6, $7) 
                RETURNING nome, crm, especialidade_id, valor_consulta, forma_atendimento, data_atendimento, hora_inicio, hora_fim;
            `, [
                nome, 
                crm, 
                especialidade_id, 
                valor_consulta, 
                forma_atendimento,
                data_atendimento, 
                hora_inicio, 
                hora_fim
            ]
        );

        return createMedicoQuery.rows[0];
    }catch(err){
        throw err
    }
}