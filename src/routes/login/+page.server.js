/* import { redirect } from "@sveltejs/kit";

export const actions = {
    default: ({cookies,url}) => {
        cookies.set('logged_in','true',{path:'/credentials'});
        throw redirect(307,url.searchParams.get('redirectTo') ?? '/credentials');
}
}; */