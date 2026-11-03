import { pool } from "../connection";
import { logger } from "../../config/winstron";

async function criarTabelaProcedimento(): Promise<void>{
    try{
        await pool.query(
            `CREATE TABLE IF NOT EXISTS procedimento(
                id SERIAL PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                especialidade_id INTEGER NOT NULL,
                ativo BOOLEAN NOT NULL DEFAULT TRUE,

                FOREIGN KEY(especialidade_id)
                    REFERENCES especialidade(id)
                    ON DELETE RESTRICT
                    ON UPDATE CASCADE
            )`
        )

        logger.info("Tabela procedimento criada ou já existente no banco de dados");
    }catch(err){
        logger.error("Erro ao criar tabela procedimento no banco de dados", {
            error: err
        });

        throw err;
    }
}

criarTabelaProcedimento();