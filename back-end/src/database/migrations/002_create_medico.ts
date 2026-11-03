import { pool } from "../connection";
import { logger } from "../../config/winstron";

async function criarTabelaMedico(): Promise<void> {
    try {
        await pool.query(
            `CREATE TABLE IF NOT EXISTS medico (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                CRM VARCHAR(100) NOT NULL,
                especialidade_id INTEGER NOT NULL,
                valor_consulta REAL NOT NULL,
                forma_atendimento VARCHAR(100) NOT NULL,
                data_atendimento DATE NOT NULL,
                hora_inicio TIME NOT NULL,
                hora_fim TIME NOT NULL,

                FOREIGN KEY(especialidade_id)
                    REFERENCES especialidade(id)
                    ON DELETE RESTRICT
                    ON UPDATE CASCADE
            )`
        );

        logger.info("Tabela medico criada ou já existente no banco de dados");
    } catch (err) {
        logger.error("Erro ao criar tabela medico no banco de dados", {
            error: err
        });

        throw err;
    }
}

criarTabelaMedico();