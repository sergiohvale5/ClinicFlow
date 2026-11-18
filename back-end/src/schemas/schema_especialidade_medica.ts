import z from "zod";

export const schemaEspecialidadeMedica = z.object(
    {
        nome: z.string().min(1, "O nome é obrigatório"),
        ativo: z.boolean()
    }
)