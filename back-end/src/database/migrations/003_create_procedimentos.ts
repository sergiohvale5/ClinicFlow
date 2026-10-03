import { pool } from "../connection";
import { logger } from "../../config/winston";

//Funçao cria tabela procedimentos no banco de dados
async function criarTabelaProcedimentos() {
    try{
        await pool.query(
            `CREATE TABLE IF NOT EXISTS procedimentos(
                id SERIAL PRIMARY KEY,
                especialidade_id INTEGER,
                nome VARCHAR(100),

                FOREIGN KEY (especialidade_id)
                    REFERENCES especialidades (id)
                    ON DELETE RESTRICT
                    ON UPDATE CASCADE
            )`
        );

        logger.info("Tabela procedimentos criada");
    }catch(err){
        logger.error("Erro ao criar tabela procedimentos", {
            error: err
        });

        throw err;
    }
}

criarTabelaProcedimentos();