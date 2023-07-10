import { z } from 'zod';

const emailSchema = z
    .string()
    .email()
    .refine((value) => {
        const allowedDomain = 'uptapachula.edu.mx';
        const emailParts = value.split('@');
        const domain = emailParts[emailParts.length - 1];
        return domain === allowedDomain;
    });

export const userSchema = z.object({
    username: z.string().min(3),
    email: emailSchema,
    password: z.string().min(6)
});


export const personalSchema = z.object({
    personalname: z.string().min(3),
    lastnames: z.string().min(3),
    matricula: z.string().min(3).regex(/^\d*$/),
    date: z.string().min(3)
});


export const groupSchema = z.object({
    group: z.string().min(2),
    carreer: z.number().refine((value) => { return value !== 0 }),
    alergy: z.string().min(2).max(100),
});

export const emergencySchema = z.object({
    alergyextra: z.string().max(10).nullable(),
    contactemergency: z.string().min(3),
    phoneEmergency: z.string().min(10).regex(/^\d*$/).max(10),
    bloodType: z.string().min(1).regex(/^(A\+|A-|B\+|B-|AB\+|AB-|O\+|O-)$/),
});