import { pool } from "../connection";
import { logger } from "../../config/winstron";

async function criarTabelaMedicoProcedimento(): Promise<void>{
    try{
        await pool.query(
            `CREATE TABLE IF NOT EXISTS medico_procedimento(
                medico_id INTEGER NOT NULL,
                procedimento_id INTEGER NOT NULL,
                
                FOREIGN KEY (medico_id)
                    REFERENCES medico(id)
                    ON DELETE RESTRICT
                    ON UPDATE CASCADE,

                FOREIGN KEY (procedimento_id)
                    REFERENCES procedimento(id)
                    ON DELETE RESTRICT
                    ON UPDATE CASCADE
            )`
        )

        logger.info("Tabela medico_procedimento criada ou já existente no banco de dados");
    }catch(err){
        logger.error("Erro ao criar tabela medico_procedimento no banco de dados", {
            error: err
        });

        throw err;
    }
}

criarTabelaMedicoProcedimento();