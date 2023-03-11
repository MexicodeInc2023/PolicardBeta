import { redirect } from '@sveltejs/kit';
import {jwt} from '../../../stores/auth';

export function load({ cookies, url }) {
	if (!cookies.get('access_token')||jwt==null) {
		console.log('No hay cookies');
		console.log(jwt!=null);
		throw redirect(307, `/login?NoLogeado=${url.pathname}`);
	}
	console.log('Hay cookies!!');
}