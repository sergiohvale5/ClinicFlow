import { logger } from "../../config/winston";
import { pool } from "../connection";

//Funçao cria tabela especialidades no banco de dados
async function criandoTabelaEspecialidades() {
    try{
        logger.info("Iniciando processo de criação das tabelas do banco de dados");

        await pool.query(
            `CREATE TABLE IF NOT EXISTS especialidades(
                id SERIAL PRIMARY KEY,
                nome VARCHAR(100)
            )`
        );

        logger.info("Tabela especialidades criada");
    }catch(err){
        logger.error("Erro ao criar tabela usuário", {
            error: err
        });

        throw err;
    }
}

criandoTabelaEspecialidades();