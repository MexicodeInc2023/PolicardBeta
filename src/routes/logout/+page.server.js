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
		let empty = '';
		if (response.ok) {
			jwt.subscribe((value) => { empty = value; });
			id.subscribe((value) => { empty = value; });
			user.subscribe((value) => { empty = value; });
			console.log('Cookies borradas Adios!', empty);
			cookies.delete('access_token');
			cookies.delete('refresh_token');
			throw redirect(307, `/`);
		} else {
			throw redirect(307, `/credentials`);
		}

		/* Este si jala xd */
	}
};