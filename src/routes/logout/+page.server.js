import { redirect } from '@sveltejs/kit';
import { jwt, id, user } from '../../stores/auth';
import { BaseUrl } from '../../stores/apiUrl';
export const actions = {
	default: async ({ cookies }) => {
		console.log(cookies.get('access_token'));
		console.log(cookies.get('refresh_token'));
		const response = await fetch(`${BaseUrl}api/logout/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${cookies.get('access_token')}`
			},
			body: JSON.stringify({
				refresh: cookies.get('refresh_token')
			})
		});

		if (response.ok) {
			jwt.set(null);
			id.set(null);
			user.set(null);
			console.log('Cookies borradas Adios!');
			cookies.delete('access_token');
			cookies.delete('refresh_token');
			throw redirect(307, `/`);
		} else {
			throw redirect(307, `/credentials`);
		}

		/* Este si jala xd */
	}
};