import { pool } from "../connection";
import { logger } from "../../config/winston";

//Funçao cria tabela pacientes no banco de dados
async function criarTabelaPacientes() {
    try{
        await pool.query(
            `CREATE TABLE IF NOT EXISTS pacientes(
                id SERIAL PRIMARY KEY,
                nome VARCHAR(100),
                telefone VARCHAR(100),
                cpf VARCHAR(100)
            )`
        );

        logger.info("Tabela pacientes criada");
    }catch(err){
        logger.error("Erro ao criar tabela pacientes", {
            error: err
        });

        throw err;
    }
}

criarTabelaPacientes();