import { findOne } from "$lib/db/controllers/items.controller.js";
import { findOne as findSession } from "$lib/db/controllers/sessions.controller.js";
import { redirect } from "@sveltejs/kit";
import { editItem, deleteItem } from "$lib/db/controllers/items.controller.js";
import { writeFile } from "fs/promises";
import { extname } from "path";

/**
 * Charge les détails d'un item et vérifie les autorisations de l'utilisateur.
 *
 * @param {Object} params - Les paramètres de la requête, incluant l'ID de l'item.
 * @param {Cookies} cookies - Les cookies de la requête pour gérer la session utilisateur.
 * @returns {<Object>} - Les détails de l'item et les données de l'utilisateur si autorisé.
 */
export async function load({params, cookies}) {
    const item = await findOne({id:params.id});
    const session = cookies.get("session");
    const id_user = await findSession({uuid: session});
    if(id_user.users.dataValues.role_id != 1)
    {
        console.log('Utilisateur non autorisé' , id_user.users);
        redirect(308, '/logout');
    }
    return { item:item, user: id_user.users.dataValues };
}

export const actions = {

     /**
     * Édite les détails d'un item, y compris la gestion des fichiers image.
     *
     * @param {Cookies} cookies - Les cookies de la requête pour la gestion de session.
     * @param {Request} request - L'objet de requête contenant les données du formulaire.
     * @throws {Redirect} - Redirige vers la page des items après modification.
     */
    edit: async({ cookies, request })=>{
        const data = await request.formData();
        const file = data.get('image_item');
        let filename = null;

        // Vérifier si file contient une image, si oui le chemin du fichier sera généré et utilisé
        if (file && file.name) {
            filename = `src/lib/img/items/${crypto.randomUUID()}${extname(file.name)}`;
            await writeFile(filename, Buffer.from(await file.arrayBuffer()));
        }

        let res = await editItem(data.get("id"), data.get("nom"), data.get("description"), filename, data.get("bande_annonce"), data.get("date"), data.get("quantite_disponible"));

        // Redirection vers le catalogue
        throw redirect(303, "/items");
    },

    /**
     * Supprime un item basé sur son identifiant.
     *
     * @param {Object} params - Les paramètres de la requête, incluant l'ID de l'item à supprimer.
     * @returns {<Object>} - Un message de succès après la suppression.
     */
    delete: async ({ params }) => {
        await deleteItem(params.id);
        return {
            status: 200,
            body: { message: 'Succès :Item supprimé' }
        };
    }

}
