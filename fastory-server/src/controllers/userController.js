import Boom from '@hapi/boom'
import { getAllCategoriesService, getCharacterByIdService, getFilmByIdService, getPlanetByIdService, getSpieceByIdService, getStarshipByIdService, getVehicleByIdService } from '../services/externalAPIServices.js';


const fetchCategories = async (req, h) => {
    try {
        const data = await getAllCategoriesService()
        return data
    } catch (err) {
        // pas de next avec hapi
        throw Boom.isBoom(err) ? err : Boom.badGateway(err.message);
    }
}

const fetchFilmById = async (req, h) => {
    try {
        const { id } = req.params;
        const data = await getFilmByIdService(id)
        return data

    } catch (err) {
        // pas de next avec hapi
        throw Boom.isBoom(err) ? err : Boom.badGateway(err.message);
    }
}

const fetchCharacterById = async (req, h) => {
    try {
        const { id } = req.params;
        const data = await getCharacterByIdService(id)
        return data

    } catch (err) {
        // pas de next avec hapi
        throw Boom.isBoom(err) ? err : Boom.badGateway(err.message);
    }
}

const fetchPlanetById = async (req, h) => {
    try {
        const { id } = req.params;
        const data = await getPlanetByIdService(id)
        return data

    } catch (err) {
        // pas de next avec hapi
        throw Boom.isBoom(err) ? err : Boom.badGateway(err.message);
    }
}

const fetchSpieceById = async (req, h) => {
    try {
        const { id } = req.params;
        const data = await getSpieceByIdService(id)
        return data

    } catch (err) {
        // pas de next avec hapi
        throw Boom.isBoom(err) ? err : Boom.badGateway(err.message);
    }
}

const fetchVehicleById = async (req, h) => {
    try {
        const { id } = req.params;
        const data = await getVehicleByIdService(id)
        return data

    } catch (err) {
        // pas de next avec hapi
        throw Boom.isBoom(err) ? err : Boom.badGateway(err.message);
    }
}

const fetchStarshipById = async (req, h) => {
    try {
        const { id } = req.params;
        const data = await getStarshipByIdService(id)
        return data

    } catch (err) {
        // pas de next avec hapi
        throw Boom.isBoom(err) ? err : Boom.badGateway(err.message);
    }
}



export { fetchCategories, fetchFilmById, fetchCharacterById, fetchPlanetById, fetchSpieceById, fetchVehicleById, fetchStarshipById }