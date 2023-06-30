import { redirect } from '@sveltejs/kit';
import { jwt, id, user } from './stores/auth';
import { BaseUrl } from './stores/apiUrl';

const unProtectedRoutes = ['/', '/login', '/info', '/form'];

export const handle = async ({ event, resolve }) => {
    const sessionId = event.cookies.get('access_token');
    if (!sessionId && !unProtectedRoutes.includes(event.url.pathname)) {
        throw redirect(303, '/');
    }

    const query = event.url.searchParams.get('signout');
    if (Boolean(query) == true) {
        console.log(event.cookies.get('access_token'));
        console.log(event.cookies.get('refresh_token'));
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
            throw redirect(307, `/credentials`);
        });

        if (response.ok) {
            jwt.set(null);
            id.set(null);
            user.set(null);
            console.log('Cookies borradas, Adios!');
            event.cookies.delete('access_token');
            event.cookies.delete('refresh_token');
            throw redirect(307, `/`);
        }
        throw redirect(307, `/credentials`);
    }
    return resolve(event);
};