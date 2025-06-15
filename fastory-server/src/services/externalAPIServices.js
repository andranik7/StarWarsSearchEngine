import axios from 'axios';
import config from "../../config.js"
import idExtractor from '../helpers/idExtractor.js';






// service to get all categories at the same time
const getAllCategoriesService = async () => {
    try {
        const resFilms = await axios.get(config.swapiAPI_URL + config.swapiAPI_category_films);
        const resPeople = await axios.get(config.swapiAPI_URL + config.swapiAPI_category_people);
        const resPlanets = await axios.get(config.swapiAPI_URL + config.swapiAPI_category_planets);
        const resVehicles = await axios.get(config.swapiAPI_URL + config.swapiAPI_category_vehicles);
        const resStarships = await axios.get(config.swapiAPI_URL + config.swapiAPI_category_starships);
        const resSpecies = await axios.get(config.swapiAPI_URL + config.swapiAPI_category_species);

        return {
            films: resFilms.data,
            people: resPeople.data,
            planets: resPlanets.data,
            vehicles: resVehicles.data,
            starships: resStarships.data,
            species: resSpecies.data
        };
    } catch (err) {
        const e = new Error(`Failed to get all categories: ${err.message}`);
        e.status = err.response?.status ?? 502;
        throw e;
    }
}

// service permettant de récupérer un film avec son id
const getFilmByIdService = async (id, isDetailed = true) => {
    try {
        const res = await axios.get(config.swapiAPI_URL + config.swapiAPI_category_films + "/" + id);

        let film = res.data;

        if (isDetailed) {
            film["charactersWithDetails"] = [] // création d'un nouveau champ initialisé à un tableau vide
            film["planetsWithDetails"] = [] // création d'un nouveau champ initialisé à un tableau vide
            film["starshipsWithDetails"] = [] // création d'un nouveau champ initialisé à un tableau vide
            film["vehiclesWithDetails"] = [] // création d'un nouveau champ initialisé à un tableau vide
            film["speciesWithDetails"] = [] // création d'un nouveau champ initialisé à un tableau vide

            // récupération des personnages du film un par un
            for (let url of film.characters) {
                const id = idExtractor(url);
                const character = await getCharacterByIdService(id, false);

                film["charactersWithDetails"].push(character);
            }

            for (let url of film.planets) {
                const id = idExtractor(url);
                const planet = await getPlanetByIdService(id, false);
                film["planetsWithDetails"].push(planet);
            }

            for (let url of film.starships) {
                const id = idExtractor(url);
                const starship = await getStarshipByIdService(id, false);
                film["starshipsWithDetails"].push(starship);
            }
            for (let url of film.vehicles) {
                const id = idExtractor(url);
                const vehicle = await getVehicleByIdService(id, false);
                film["vehiclesWithDetails"].push(vehicle);
            }
            for (let url of film.species) {
                const id = idExtractor(url);
                const spiece = await getSpieceByIdService(id, false);
                film["speciesWithDetails"].push(spiece);
            }

        }

        return film;
    } catch (err) {
        const e = new Error(`Failed to get the film with id ${id}: ${err.message}`);
        e.status = err.response?.status ?? 502;
        throw e;
    }
}

// ... ... un personnage avec son id
const getCharacterByIdService = async (id, isDetailed = true) => {
    try {
        const res = await axios.get(config.swapiAPI_URL + config.swapiAPI_category_people + "/" + id);

        let character = res.data;

        if (isDetailed) {

            character["planetsWithDetails"] = [] // création d'un nouveau champ initialisé à un tableau vide
            character["starshipsWithDetails"] = [] // création d'un nouveau champ initialisé à un tableau vide
            character["vehiclesWithDetails"] = [] // création d'un nouveau champ initialisé à un tableau vide
            character["speciesWithDetails"] = [] // création d'un nouveau champ initialisé à un tableau vide
            character["filmsWithDetails"] = [] // création d'un nouveau champ initialisé à un tableau vide


            // getting homeworld of character
            const planetId = idExtractor(character.homeworld);
            const planet = await getPlanetByIdService(planetId, false);
            character["planetsWithDetails"].push(planet);


            for (let url of character.films) {
                const id = idExtractor(url);
                const planet = await getFilmByIdService(id, false);
                character["filmsWithDetails"].push(planet);
            }

            for (let url of character.starships) {
                const id = idExtractor(url);
                const starship = await getStarshipByIdService(id, false);
                character["starshipsWithDetails"].push(starship);
            }
            for (let url of character.vehicles) {
                const id = idExtractor(url);
                const vehicle = await getVehicleByIdService(id, false);
                character["vehiclesWithDetails"].push(vehicle);
            }
            for (let url of character.species) {
                const id = idExtractor(url);
                const spiece = await getSpieceByIdService(id, false);
                character["speciesWithDetails"].push(spiece);
            }

        }

        return character;
    } catch (err) {
        const e = new Error(`Failed to get the character with id ${id}: ${err.message}`);
        e.status = err.response?.status ?? 502;
        throw e;
    }
}

// ... ... un personnage avec son id
const getPlanetByIdService = async (id, isDetailed = true) => {
    try {
        const res = await axios.get(config.swapiAPI_URL + config.swapiAPI_category_planets + "/" + id);

        let planet = res.data;

        if (isDetailed) {
            planet["peopleWithDetails"] = [] // création d'un nouveau champ initialisé à un tableau vide
            planet["filmsWithDetails"] = [] // création d'un nouveau champ initialisé à un tableau vide

            for (let url of planet.residents) {
                const id = idExtractor(url);
                const character = await getCharacterByIdService(id, false);
                planet["peopleWithDetails"].push(character);
            }

            for (let url of planet.films) {
                const id = idExtractor(url);
                const film = await getFilmByIdService(id, false);
                planet["filmsWithDetails"].push(film);
            }

        }

        return planet;
    } catch (err) {
        const e = new Error(`Failed to get the planet with id ${id}: ${err.message}`);
        e.status = err.response?.status ?? 502;
        throw e;
    }
}

// ... ... une espèce avec son id
const getSpieceByIdService = async (id, isDetailed = true) => {
    try {
        const res = await axios.get(config.swapiAPI_URL + config.swapiAPI_category_species + "/" + id);

        let spiece = res.data;

        if (isDetailed) {
            spiece["peopleWithDetails"] = [] // création d'un nouveau champ initialisé à un tableau vide
            spiece["filmsWithDetails"] = [] // création d'un nouveau champ initialisé à un tableau vide

            for (let url of spiece.people) {
                const id = idExtractor(url);
                const character = await getCharacterByIdService(id, false);
                spiece["peopleWithDetails"].push(character);
            }

            for (let url of spiece.films) {
                const id = idExtractor(url);
                const film = await getFilmByIdService(id, false);
                spiece["filmsWithDetails"].push(film);
            }
        }

        return spiece;
    } catch (err) {
        const e = new Error(`Failed to get the speice with id ${id}: ${err.message}`);
        e.status = err.response?.status ?? 502;
        throw e;
    }
}

// ... ... un véhicule avec son id
const getVehicleByIdService = async (id, isDetailed = true) => {
    try {
        const res = await axios.get(config.swapiAPI_URL + config.swapiAPI_category_vehicles + "/" + id);

        let vehicle = res.data;



        if (isDetailed) {

            vehicle["filmsWithDetails"] = [] // création d'un nouveau champ initialisé à un tableau vide
            vehicle["peopleWithDetails"] = [] // création d'un nouveau champ initialisé à un tableau vide

            for (let url of vehicle.films) {
                const id = idExtractor(url);
                const film = await getFilmByIdService(id, false);
                vehicle["filmsWithDetails"].push(film);
            }

            for (let url of vehicle.pilots) {
                const id = idExtractor(url);
                const character = await getCharacterByIdService(id, false);
                vehicle["peopleWithDetails"].push(character);
            }
        }

        return vehicle;
    } catch (err) {
        const e = new Error(`Failed to get the vehicle with id ${id}: ${err.message}`);
        e.status = err.response?.status ?? 502;
        throw e;
    }
}


// ... ... un vaisseau avec son id
const getStarshipByIdService = async (id, isDetailed = true) => {
    try {
        const res = await axios.get(config.swapiAPI_URL + config.swapiAPI_category_starships + "/" + id);

        let starship = res.data;

        if (isDetailed) {

            starship["filmsWithDetails"] = [] // création d'un nouveau champ initialisé à un tableau vide
            starship["peopleWithDetails"] = [] // création d'un nouveau champ initialisé à un tableau vide

            for (let url of starship.films) {
                const id = idExtractor(url);
                const film = await getFilmByIdService(id, false);
                starship["filmsWithDetails"].push(film);
            }


            for (let url of starship.pilots) {
                const id = idExtractor(url);
                const character = await getCharacterByIdService(id, false);
                starship["peopleWithDetails"].push(character);
            }
        }


        return starship;
    } catch (err) {
        const e = new Error(`Failed to get the starship with id ${id}: ${err.message}`);
        e.status = err.response?.status ?? 502;
        throw e;
    }
}




export { getAllCategoriesService, getFilmByIdService, getCharacterByIdService, getPlanetByIdService, getSpieceByIdService, getVehicleByIdService, getStarshipByIdService }