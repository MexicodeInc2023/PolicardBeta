
import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { BaseUrl } from '../../stores/apiUrl';
import { authenticated } from '../../stores/auth';
import { beforeNavigate } from '$app/navigation';
import { loading } from '../../stores/states';
import * as db from '$lib/server/database.js';
const loginUrl = BaseUrl + 'api/login/';

const emailSchema = z.string().email().refine((value) => {
    const allowedDomain = ["uptapachula.edu.mx", "gmail.com"];
    const emailParts = value.split("@");
    const domain = emailParts[emailParts.length - 1];
    return allowedDomain.includes(domain);
}, {
    message: "El correo debe ser el institucional.",
});

const schema = z.object({
    email: emailSchema,
    password: z.string().min(6)
});

let dataLogin;
let success;
let error;

export const load = async () => {
    const form = await superValidate(schema);
    return { form, success, error, dataLogin };
};

export const actions = {
    default: async ({ request, cookies }) => {
        loading.set(true);
        const form = await superValidate(request, schema);
        console.log('POST', form);

        if (!form.valid) {
            return fail(400, { form });
        }

        const email = form.data.email;
        const password = form.data.password;

        console.log('Formulario válido, se envía a la API: ' + email + password);

        const res = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }).catch(err => {
            error = true;
            success = false;
            console.log(err);
            throw new Error('No se pudo iniciar sesión');
        });

        if (!res.ok) {
            error = true;
            success = false;
            console.log(res);
            console.log('Fallo');
            authenticated.set(false);
            return fail(400, { error: true, success: false });
        }

        dataLogin = await res.json();

        if (!dataLogin.tokens) {
            error = true;
            success = false;
            authenticated.set(false);
            throw new Error('No se encontraron tokens de acceso');
        }

        console.log(dataLogin);
        db.setSession(dataLogin);

        cookies.set('access_token', dataLogin.tokens.access, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
            httpOnly: true,
            sameSite: 'strict',
        })

        cookies.set('refresh_token', dataLogin.tokens.refresh, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7 * 2,
            httpOnly: true,
            sameSite: 'strict',
        })
        console.log('Cookies establecidas');
        error = false;
        success = true;

        // Antes de redirigir retornamos form 
        beforeNavigate(() => {
            return { form };
        });


        if (success) {
            throw redirect(303, '/credentials');
        }

        throw redirect(303, '/login');
    }
};


