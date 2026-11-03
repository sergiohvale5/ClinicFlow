import pg from "pg";
import { env } from "../config/env";

const { Pool } = pg;

export const pool = new Pool(
    {
        host: env.host_pool,
        port: Number(env.port_pool),
        user: env.user_pool,
        password: env.password_pool,
        database: env.database_pool
    }
)