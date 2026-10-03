import winston from "winston";

const { printf, combine, timestamp, colorize } = winston.format;

//Formato do logger
const logFormat = printf(({timestamp, level, message}) => {
    return `[${timestamp}] ${level}: ${message}`
});

//Configuração do logger
export const logger = winston.createLogger(
    {
        level: "info",
        format: combine(
            timestamp(),
            logFormat
        ),

        transports: [
            new winston.transports.Console(
                {
                    format: combine(
                        colorize(),
                        timestamp(),
                        logFormat
                    )
                }
            ),

            new winston.transports.File(
                {
                    filename: "logs/error.log",
                    level: "error"
                }
            ),

            new winston.transports.File(
                {
                    filename: "logs/combined.log"
                }
            )
        ]
    }
)