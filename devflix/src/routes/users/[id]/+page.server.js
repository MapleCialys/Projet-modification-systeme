import { findOne } from "$lib/db/controllers/users.controller";
import { redirect } from "@sveltejs/kit";
import { deleteUser } from "../../../lib/db/controllers/users.controller.js";

/**
 * Charge les données d'un utilisateur spécifique en fonction de l'identifiant.
 * @param {Object} params - Les paramètres de la requête.
 * @returns {Object} - Les données de l'utilisateur.
 */
export async function load({ params }){
    const idUser = params.id;
    const user = await findOne({ id: idUser });

    return { user:user };
}

export const actions = {

   /**
    * Supprime un user basé sur son identifiant.
    *
    * @param {Object} params - Les paramètres de la requête, incluant l'ID de l'utilisateur à supprimer.
    * @returns {<Object>} - Un message de succès après la suppression.
    */
   delete: async ({ params }) => {
       await deleteUser(params.id);
       console.log('Succès :User supprimé');
       redirect(302, '/logout');
   }

}
