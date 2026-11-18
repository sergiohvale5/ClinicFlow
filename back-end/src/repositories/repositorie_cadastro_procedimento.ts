import { pool } from "../database/connection";

export const repositorieCadastroProcedimento = async (
    nome: string,
    especialidade_id: number,
    ativo: boolean
) => {
    try{
        const createProcedimentoQuery = await pool.query(
            `
                INSERT INTO procedimento(nome, especialidade_id, ativo)
                VALUES($1, $2, $3) RETURNING nome, especialidade_id, ativo;
            `, [
                nome,
                especialidade_id,
                ativo
            ]
        );

        return createProcedimentoQuery.rows[0];
    }catch(err){
        throw err;
    }
}