import { newUser } from '../src/lib/db/controllers/users.controller.js';
let user_test;

test('dois retourner un nouvel utilisateur', async () => {
    const result = await newUser("Bob", "fortier", "bob@gmail.com", 1, "password123");
    user_test = result;
    expect(result).toMatchObject({
        nom: "Bob",
        prenom: "fortier",
        courriel: "bob@gmail.com",
        role_id: 1
    });
});

import { findAll } from '../src/lib/db/controllers/users.controller.js';

test('dois retourner les utilisateurs avec leur roles', async () => {
    const result = await findAll();
    expect(result).toEqual(expect.arrayContaining([
        expect.objectContaining({
            id: expect.any(Number),
            nom: expect.any(String),
            prenom: expect.any(String),
            courriel: expect.any(String),
            role: expect.any(Object)
        })
    ]));
});

import { findOne } from '../src/lib/db/controllers/users.controller.js';

test('dois retourner les données d\' un utilisateur', async () => {
    const result = await findOne({ id: 1 });
    expect(result).toEqual(expect.objectContaining({
        id: expect.any(Number),
        nom: expect.any(String),
        prenom: expect.any(String),
        courriel: expect.any(String),
        role: expect.any(Object)
    }) || null);
});

import { authenticate } from '../src/lib/db/controllers/users.controller.js';

test('dois retourner un objet avec les données d\'utilisateur', async () => {
    const result = await authenticate('admin@devflix.ca', 'admin');
    expect(result).toEqual(expect.any(Object));
});

import { deleteUser } from '../src/lib/db/controllers/users.controller.js';

test('dois retourner un message de succes apres avoir supprimer l\'utilisateur', async () => {
    const result = await deleteUser(user_test.id);
    expect(result).toEqual({ message: 'Succès :User supprimé' });
});
