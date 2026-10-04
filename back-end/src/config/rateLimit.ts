import rateLimit from "express-rate-limit";

//Configurando medida de proteção contra excesso de requisições
export const limit = rateLimit(
    {
        windowMs: 15 * 60 * 1000,
        max: 100,
        message: "Muitas requisições. Tente novamente depois"
    }
)