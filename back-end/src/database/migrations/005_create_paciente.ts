import { pool } from "../connection";
import { logger } from "../../config/winstron";;

async function criarTabelaPaciente() {
    try{
        await pool.query(
            `CREATE TABLE IF NOT EXISTS paciente(
                id SERIAL PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                telefone VARCHAR(100) NOT NULL,
                cpf VARCHAR(100) NOT NULL,
                medico_id INTEGER NOT NULL,
                procedimento_id INTEGER NOT NULL,
                valor REAL NOT NULL,
                forma_pagamento VARCHAR(100) NOT NULL,
                data DATE NOT NULL,
                hora TIME NOT NULL,
                hora_fim TIME NOT NULL,
                status VARCHAR(100) NOT NULL,
                data_cadastro DATE NOT NULL,

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
        logger.error("Erro ao criar tabela paciente no banco de dados", {
            error: err
        });

        throw err;
    }
}

criarTabelaPaciente();