import z from "zod";

export const shemaCadastroProcedimento = z.object(
    {
        nome: z.string().min(1, "O nome é obrigatório"),
        especialidade_id: z.number().int().positive(),
        ativo: z.boolean()
    }
)