import {z} from "zod";
export const createPollschema = z.object({
    question: z.string().min(1, "A questão é obrigatoria").max(255, "A questão deve ter no máximo 255 caracteres"),
    start_date: z.coerce.date(),
    end_date: z.coerce.date(),
    options: z
    .array(z.string().min(1, "A opção nâo pode estar vazia"))
    .min(3, "A enquete deve ter no minimo 3 ops"),

});

export type CreatePollInput = z.infer<typeof createPollschema>;
