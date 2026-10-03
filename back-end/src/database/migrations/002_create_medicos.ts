import { pool } from "../connection";
import { logger } from "../../config/winston";

//Funçao cria tabela medicos no banco de dados
async function criandoTabelaMedicos() {
    try{
        await pool.query(
            `CREATE TABLE IF NOT EXISTS medicos(
                id SERIAL PRIMARY KEY,
                especialidade_id INTEGER,
                nome VARCHAR(100),
                crm VARCHAR(100),
                valor_consulta REAL,

                FOREIGN KEY(especialidade_id)
                    REFERENCES especialidades (id)
                    ON DELETE RESTRICT
                    ON UPDATE CASCADE
            )`
        );

        logger.info("Tabela medicos criada");
    }catch(err){
        logger.error("Erro ao criar tabela especialidades", {
            error: err
        });

        throw err;
    }
}

criandoTabelaMedicos();