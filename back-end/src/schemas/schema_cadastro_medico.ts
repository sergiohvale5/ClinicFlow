import z from "zod";

export const shemaCadastroMedico = z.object(
    {
        nome: z.string().min(1, "O nome é obrigatório"),
        crm: z.string().min(1, "O CRM é obrigatório"),
        especialidade_id: z.number().int().positive(),
        valor_consulta: z.number().positive(),
        forma_atendimento: z.string(),
        data_atendimento: z.coerce.date(), 
        hora_inicio: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Formato inválido (use HH:MM)"),
        hora_fim: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Formato inválido (use HH:MM)")
    }
);
