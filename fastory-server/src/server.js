import Hapi from '@hapi/hapi';
import HapiBasic from "@hapi/basic"
import userRoutes from './routes/userRoutes.js';
import { validate } from './routes/userRoutes.js';
import Jwt2 from 'hapi-auth-jwt2';



export const JWT_SECRET = process.env.JWT_SECRET || 'modifier';


const start = async () => {

    const server = Hapi.server({
        port: 3100,
        routes: {
            cors: true
        }
    });

    await server.register(HapiBasic);

    server.auth.strategy('simple', 'basic', { validate });

    await server.register(Jwt2);


    const validateJwt = async (decoded, request, h) => {

        if (decoded.id && decoded.name) {
            return { isValid: true, credentials: decoded };
        }
        return { isValid: false };
    };

    server.auth.strategy('jwt', 'jwt', {
        key: JWT_SECRET,
        validate: validateJwt,
        verifyOptions: { algorithms: ['HS256'] }
    });



    // déclaration des routes dans le serveur
    server.route(userRoutes);

    await server.start();

    console.log('server running at: ' + server.info.uri);
};

start();