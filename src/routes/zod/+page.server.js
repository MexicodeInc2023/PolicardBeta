import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

const emailSchema = z.string().email().refine((value) => {
    const allowedDomain = "example.com";
    const emailParts = value.split("@");
    const domain = emailParts[emailParts.length - 1];
    return domain === allowedDomain;
}, {
    message: "El correo debe tener una terminación válida.",
});


const schema = z.object({
    email: emailSchema,
    password: z.string().min(6)
});

export const load = async () => {
    // Server API:
    const form = await superValidate(schema);

    // Always return { form } in load and form actions.
    return { form };
};

export const actions = {
    register: async ({ request }) => {
        const form = await superValidate(request, schema);
        console.log('POST', form);

        if (!form.valid) {
            return fail(400, { form });
        }

        console.log('Formulario válido, se envía a la API');

        return { form };
    }
};