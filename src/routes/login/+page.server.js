import { redirect } from "@sveltejs/kit";
import {jwt} from '../../stores/auth';

export const actions = {
    default: ({cookies,url}) => {
        cookies.set('access_token',jwt,{path:'/'});
        throw redirect(307,url.searchParams.get('redirectTo') ?? '/login');
}
};