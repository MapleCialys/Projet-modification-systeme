import { Sequelize } from "sequelize";
import { Roles } from "../lib/db/models/roles.model";
import { Users } from "../lib/db/models/users.model";
import { Items } from "../lib/db/models/items.model";
import { Sessions } from "../lib/db/models/sessions.model";
import { Items_Paniers } from "../lib/db/models/items_paniers.model.js";
import { sequelize } from "../lib/db/db";
import { newUser } from "../lib/db/controllers/users.controller.js";
import { newItem } from "../lib/db/controllers/items.controller.js";

export async function load({ cookies }) {
    await sequelize.sync();
    
    const role_admin = await Roles.findOne({where: {id: 1}});
    const role_client = await Roles.findOne({where: {id: 2}});
    const catalogue = await Items.findAll();
    if(catalogue == '')
        await catalogueBase();
    if (!role_admin)
        await newRole('admin', 'Administrateur de l\'application');
    if (!role_client)
        await newRole('client', 'Client avec autorisations réduites');
    const admin = await Users.findOne({ where: { courriel: 'admin@devflix.ca' } });
 
    
    if (!admin)
        await newUser('admin', 'admin', 'admin@devflix.ca', "1", 'admin');
    
    return{};
}

async function catalogueBase()
{
    await newItem("La guerre des étoiles",
                     "Luke Skywalker se joint à un chevalier Jedi, un pilote arrogant, un Wookiee et à deux droïdes pour sauver la galaxie de l'Empire, tout en essayant de sauver la princesse Léia du maléfique Dark Vador.",
                     "src/lib/img/items/starwars.png",
                     "https://www.youtube.com/embed/TzSm9dWso1o?si=MszH04Wa16KiQ4zC",
                     "1977-05-25", "10");
    await newItem("Dune",
                    "Dans un futur lointain, la guerre fait rage entre familles de l'empire. Lorsque Leto Atréides est assassiné, son fils Paul s'allie aux mystérieux Fremen pour contrôler la production d'Epice ...",
                    "src/lib/img/items/dune.jpg",
                    "https://www.youtube.com/embed/n9xhJrPXop4?si=xIsMvw50T4lvTI8g",
                    "2021-09-11", "10");
    await newItem("Mon voisin Totoro",
                    "Lorsque deux jeunes filles déménagent à la campagne pour être près de leur mère souffrante, elles vivent des aventures avec les merveilleux esprits de la forêt qui vivent tout près.",
                    "src/lib/img/items/totoro.jpg",
                    "https://www.youtube.com/embed/92a7Hj0ijLs?si=4In6jXHjWY8qFi6r",
                    "1988-04-16", "10");
    await newItem("Nous, les Leroy",
                    "Un homme emmène sa femme et leurs enfants adolescents dans un voyage de souvenirs alors qu'il est sur le point de divorcer.",
                    "src/lib/img/items/leroy.png",
                    "https://www.youtube.com/embed/4v1z0H10ebM?si=XBiHysGG4k_5mHsp",
                    "2024-04-10", "10");
    await newItem("Retour vers le futur",
                    "Marty McFly, un lycéen de 17 ans, est accidentellement envoyé trente ans plus tôt avec une voiture DeLorean qui voyage dans le temps, inventé par son ami le scientifique non-conformiste Doc ... ",
                    "src/lib/img/items/futur.jpg",
                    "https://www.youtube.com/embed/cU5BREZ9ke0?si=Hm4T9HHGK5dLWL6_",
                    "1985-07-03", "10");   
}