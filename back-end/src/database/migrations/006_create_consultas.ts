import { pool } from "../connection";
import { logger } from "../../config/winston";

//Funçao cria tabela consultas no banco de dados
async function criarTabelaConsultas() {
    try{
        await pool.query(
            `CREATE TABLE IF NOT EXISTS consultas(
                id SERIAL PRIMARY KEY,
                paciente_id INTEGER,
                medico_id INTEGER,
                procedimento_id INTEGER,
                valor REAL,
                forma_pagamento VARCHAR(100),
                data_consulta DATE,
                horario_consulta TIME,
                status VARCHAR(100),

                FOREIGN KEY (paciente_id)
                    REFERENCES pacientes (id)
                    ON DELETE RESTRICT
                    ON UPDATE CASCADE,
                
                FOREIGN KEY (medico_id)
                    REFERENCES medicos (id)
                    ON DELETE RESTRICT
                    ON UPDATE CASCADE,

                FOREIGN KEY (procedimento_id)
                    REFERENCES procedimentos (id)
                    ON DELETE RESTRICT
                    ON UPDATE CASCADE
            )`
        )

        logger.info("Tabela consultas criada");
    }catch(err){
        logger.error("Erro ao criar tabela pacientes", {
            error: err
        });

        throw err;
    }
}

criarTabelaConsultas();