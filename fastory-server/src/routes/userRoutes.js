import Bcrypt from "bcrypt"
import { fetchCategories, fetchCharacterById, fetchFilmById, fetchPlanetById, fetchSpieceById, fetchStarshipById, fetchVehicleById } from '../controllers/userController.js';
import Jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../server.js";
import * as Boom from '@hapi/boom';




// comme nous n'avons pas de base de données, construisons un tableau contenant nos users
const users = {
  Luke: {
    username: 'Luke',
    password: '$2a$04$F1Ct/q5kROtOpi5cwDu7MeTrrAmyivdLp91N3BIVGDntkGzaGXc5S',   // il s'agit du hash du mot de passe $2y$10$a597D6zByzDKDbR7I4OlwetInG4pbNmNp4gMB7tEX3HGRLWy6yag2
    name: 'Luke Doe',
    id: '123456'
  }
};

// fonction permettant de valider l'authentification du user
const validate = async (request, username, password) => {
  const user = users[username];
  if (!user) {
    return { credentials: null, isValid: false };
  }
  const isValid = await Bcrypt.compare(password, user.password);
  const credentials = { id: user.id, name: user.name };
  return { isValid, credentials };
};

export { validate }


export default [

  {
    method: 'POST',
    path: '/login',
    options: { auth: false },
    handler: async (request, h) => {
      // récpuréation des credentials depuis la requete
      const { username, password } = request.payload;
      const { isValid, credentials } = await validate(request, username, password);

      if (!isValid) {
        throw Boom.unauthorized('Invalid username or password');
      }

      // génération d'un token jwt pour pouvoir authentifier les requetes ultérieurement
      const token = Jwt.sign(
        {
          id: credentials.id,
          name: credentials.name
        },
        JWT_SECRET,
        { algorithm: 'HS256', expiresIn: '1h' }
      );


      return h.response({ token, username }).code(200);
    }
  },

  // ces routes sont protégées par jwt


  // route pour récupérer toutes les catégories
  {
    method: 'GET',
    path: '/fetchCategories',
    options: { auth: 'jwt' },
    handler: fetchCategories
  },

  // route pour récupérer un film par id
  {
    method: 'GET',
    path: '/films/{id}',
    options: { auth: 'jwt' },
    handler: fetchFilmById
  },

  // route pour récupérer un personnage par id
  {
    method: 'GET',
    path: '/people/{id}',
    options: { auth: 'jwt' },
    handler: fetchCharacterById
  },


  // route pour récupérer une planète par id
  {
    method: 'GET',
    path: '/planets/{id}',
    options: { auth: 'jwt' },
    handler: fetchPlanetById
  },

  // route pour récupérer une espèce par id
  {
    method: 'GET',
    path: '/spieces/{id}',
    options: { auth: 'jwt' },
    handler: fetchSpieceById
  },

  {
    method: 'GET',
    path: '/vehicles/{id}',
    options: { auth: 'jwt' },
    handler: fetchVehicleById
  },

  {
    method: 'GET',
    path: '/starships/{id}',
    options: { auth: 'jwt' },
    handler: fetchStarshipById
  },

]






