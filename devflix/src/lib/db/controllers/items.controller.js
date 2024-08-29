import { Items } from "../models/items.model";


/**
 * Crée un nouvel item.
 * @param {string} p_nom - Nom de l'item.
 * @param {string} p_description - Description de l'item.
 * @param {string} p_image_item - URL de l'image de l'item.
 * @param {string} p_bande_annonce - URL de la bande annonce de l'item.
 * @param {Date} p_date - Date associée à l'item.
 * @param {number} p_quantite_disponible - Quantité disponible de l'item.
 * @returns {Object} - Les données de l'item créé.
 */
export async function newItem(p_nom, p_description, p_image_item, p_bande_annonce, p_date, p_quantite_disponible){
    Items.create({
        nom: p_nom,
        description: p_description,
        image_item: p_image_item,
        bande_annonce: p_bande_annonce,
        date: p_date,
        quantite_disponible: p_quantite_disponible
    })
    .then(resultat => {
        return resultat.dataValues;
    })
    .catch((error)=>{
        throw error;
    });
}

/**
 * Récupère tous les items.
 * @returns {Object[]} - Liste des items.
 */
export async function findAll(){
    return await Items.findAll().then(resultat => {
        return resultat.map(item => item.dataValues);
    })
    .catch((error)=>{
        throw error;
    });
}

/**
 * Récupère un item spécifique.
 * @param {Object} p_where - Conditions de recherche de l'item.
 * @returns {Object} - Les données de l'item trouvé.
 */
export async function findOne(p_where){
    return await Items.findOne({ where: p_where })
    .then(res => {
        return res.dataValues;
    }).catch((error) => {
        throw error;
    });
}


/**
 * Modifie un item existant.
 * @param {number} p_id - ID de l'item à modifier.
 * @param {string} p_nom - Nouveau nom de l'item.
 * @param {string} p_description - Nouvelle description de l'item.
 * @param {string} p_image_item - Nouvelle URL de l'image de l'item.
 * @param {string} p_bande_annonce - Nouvelle URL de la bande annonce de l'item.
 * @param {Date} p_date - Nouvelle date associée à l'item.
 * @param {number} p_quantite_disponible - Nouvelle quantité disponible de l'item.
 * @returns {Object} - Les données de l'item mis à jour.
 */
export async function editItem(p_id, p_nom, p_description, p_image_item, p_bande_annonce, p_date, p_quantite_disponible) {
    try {
        const item = await Items.findByPk(p_id);
        if (!item) {
            throw new Error('Film not found');
        }
    
        item.id = p_id;
        item.nom = p_nom;
        item.description = p_description;
        item.image_item = p_image_item
        item.bande_annonce = p_bande_annonce;
        item.date = p_date;
        item.quantite_disponible = p_quantite_disponible;

        const updatedItem = await item.save();
        return updatedItem.dataValues;

    } catch (error) {
        throw error;
    }
}

/**
 * Supprime un item avec la fonctionnalité paranoid.
 * @param {number} p_id - ID de l'item à supprimer.
 * @returns {Object} - Message de succès.
 */
export async function deleteItem(p_id) {
    try {
        const item = await Items.findByPk(p_id);
        if (!item) {
            throw new Error('Item non trouvé');
        }

        await item.destroy();
        
        return { message: 'Succès :Item supprimé' };

    } catch (error) {
        throw error;
    }
}
