import { redirect } from '@sveltejs/kit';

export async function load({ cookies }){
    const session = cookies.get("session");
    if (!session)
        throw redirect(302, '/');
    return;
}