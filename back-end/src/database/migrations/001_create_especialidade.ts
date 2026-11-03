import { pool } from "../connection";
import { logger } from "../../config/winstron";

async function criarTabelaEspecialidade(): Promise<void> {
    try {
        await pool.query(
            `CREATE TABLE IF NOT EXISTS especialidade (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                ativo BOOLEAN NOT NULL DEFAULT TRUE
            )`
        );

        logger.info("Tabela especialidade criada ou já existente no banco de dados");
    } catch (err) {
        logger.error("Erro ao criar tabela especialidade no banco de dados", {
            error: err
        });

        throw err;
    }
}

criarTabelaEspecialidade();