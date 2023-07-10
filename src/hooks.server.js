import { redirect } from '@sveltejs/kit';
import { jwt } from './stores/auth';
import { BaseUrl } from './stores/apiUrl';
import * as db from '$lib/server/database.js';


const unProtectedRoutes = ['/', '/login', '/info', '/form', '/privacidad'];

export const handle = async ({ event, resolve }) => {
    const sessionId = event.cookies.get('access_token');
    if (!sessionId && !unProtectedRoutes.includes(event.url.pathname)) {
        throw redirect(303, '/');
    }

    const query = event.url.searchParams.get('signout');
    if (Boolean(query) == true) {
        console.log("Listo para eliminar " + event.cookies.get('access_token'));
        console.log("Listo para eliminar " + event.cookies.get('refresh_token'));

        if (event.cookies.get('access_token') == null || event.cookies.get('refresh_token') == null) {
            console.log("Cookies corruptas");
            jwt.set(null);
            db.clearSession();
            event.cookies.delete('access_token');
            event.cookies.delete('refresh_token');
            throw redirect(307, `/`);
        }

        const response = await fetch(`${BaseUrl}api/logout/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${event.cookies.get('access_token')}`
            },
            body: JSON.stringify({
                refresh: event.cookies.get('refresh_token')
            })
        }).catch((error) => {
            console.log("Erorrr", error);
        });

        if (!response.ok) {
            console.log("No se pudo eliminar las cookies");
        }
        jwt.set(null);
        db.clearSession();
        event.cookies.delete('access_token');
        event.cookies.delete('refresh_token');
        console.log('Cookies borradas, Adios!');
        throw redirect(303, `/`);
    }



    return resolve(event);
};