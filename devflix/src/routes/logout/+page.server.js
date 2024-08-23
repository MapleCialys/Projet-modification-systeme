import { fail } from '@sveltejs/kit';
import { deleteCookie } from '../../lib/db/controllers/sessions.controller';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies })
{
    try {
        deleteCookie(cookies);
        return {success: true};
    }catch(error){
        //console.log(error);
        return fail(401, 'Erreur lors de la déconnexion.');
    }
}
