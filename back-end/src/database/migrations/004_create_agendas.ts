import { pool } from "../connection";
import { logger } from "../../config/winston";

//Funçao cria tabela agendas no banco de dados
async function criarTabelaAgendas() {
    try{
        await pool.query(
            `CREATE TABLE IF NOT EXISTS agendas(
                id SERIAL PRIMARY KEY,
                medico_id INTEGER,
                data_atendimento DATE,
                horario_incio TIME,
                horario_fim TIME,

                FOREIGN KEY (medico_id)
                    REFERENCES medicos (id)
                    ON DELETE RESTRICT
                    ON UPDATE CASCADE
            )`
        );

        logger.info("Tabela agendas criadas");
    }catch(err){
        logger.error("Erro ao criar tabela", {
            error: err
        });

        throw err;
    }
}

criarTabelaAgendas();