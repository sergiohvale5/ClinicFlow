import winston from "winston";

const { printf, combine, timestamp, colorize } = winston.format;

const formatLogger = printf(({timestamp, level, message, error}) => {
    return `[${timestamp}] ${level}: ${message} ${error instanceof Error ? `\n${error.stack}` : ""}`;
});

export const logger = winston.createLogger(
    {
        level: "info",
        format: combine(
            timestamp(),
            formatLogger
        ),

        transports: [
            new winston.transports.Console({
                format: combine(
                    colorize(),
                    timestamp(),
                    formatLogger
                )
            }),

            new winston.transports.File({
                filename: "logs/error.log",
                level: "error"
            }),

            new winston.transports.File({
                filename: "logs/combined.log"
            })
        ]
    }
)