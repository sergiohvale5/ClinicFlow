import z from "zod";

// Definindo tipos de dados de especilidade  médica
export const schemaEspecialidades = z.object(
    {
        nome: z.string()
    }
)