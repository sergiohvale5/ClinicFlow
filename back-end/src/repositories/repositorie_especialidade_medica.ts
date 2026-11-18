import { pool } from "../database/connection";

export const repositorieEspecialidadeMedica = async (nome: string, ativo: boolean) => {
    try{
        const createEspecialidadeQuery = await pool.query(
            `
                INSERT INTO especialidade(nome, ativo)
                VALUES($1, $2)
                RETURNING nome, ativo
            `, [
                nome,
                ativo
            ]
        );

        return createEspecialidadeQuery.rows[0];
    }catch(err){
        throw err;
    }
}   