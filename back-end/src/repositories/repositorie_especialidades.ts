import { pool } from "../database/connection";
import { logger } from "../config/winston";

// Repositorie responsável pela persistência de especialidades médicas
export const repositorieEspecialidades = async (nome: string) => {
    try{
        const dadosEspecialidades = await pool.query(
            `INSERT INTO especialidades(nome) VALUES($1) RETURNING id, nome`,
            [nome]
        );

        return dadosEspecialidades.rows[0];
    }catch(err){
        logger.error("Erro ao registrar dados de especialidade médica no banco de dados", {
            error: err
        });

        throw err;
    }
}