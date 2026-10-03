import pg from "pg";
import { env } from "../config/dotenv";

//Configurando driver

const { Pool } = pg

export const pool = new Pool(
    {
        host: env.pool_host,
        port: Number(env.pool_port),
        user: env.pool_user,
        password: env.pool_password,
        database: env.pool_database
    }
)