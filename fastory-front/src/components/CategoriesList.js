import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/categoriesThunks";
import { Box, CircularProgress, Grid, Typography, TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';

import FilmCard from "./FilmCard";
import PeopleCard from "./PeopleCard";
import PlanetCard from "./PlanetCard";
import StarshipCard from "./StarshipCard";
import VehicleCard from "./VehicleCard";
import SpieceCard from "./SpieceCard";


const CategoriesList = () => {

    const dispatch = useDispatch();
    const { status, error, items } = useSelector(state => state.categories);

    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('all')
    const [filteredItems, setFilteredItems] = useState([])


    const onGetCategories = () => {
        dispatch(getCategories());
    }

    // au chargement du composant on récuère toutes les catégories
    useEffect(() => {
        onGetCategories()
    }, [])

    useEffect(() => {
        const q = query.trim().toLowerCase(); // on convertit en minuscule pour ne pas considérer les majuscules dans le filtre

        if (q === '' && category === "all") { // si query est vide ou contient que des espaces, et category est all, initialisaion des filteredItems à items (tout les items dans la base)
            setFilteredItems(items);
            return;
        }

        // on prépare entriesToFilter
        let entriesToFilter;
        if (category && category !== 'all') {
            // l'utilisateur a choisi une catégorie précise
            const listForCategory = items[category];
            if (Array.isArray(listForCategory)) {
                entriesToFilter = [[category, listForCategory]];
            } else {
                // si la catégorie n'existe pas, on met une liste vide
                entriesToFilter = [[category, []]];
            }
        } else {
            // sinon on prend toutes les catégories
            entriesToFilter = Object.entries(items);
        }


        // ensuite on filtre avec le nom ou le titre
        const filtered = Object.fromEntries(
            entriesToFilter.map(([cat, list]) => {
                const filteredList = list.filter(item => {
                    const field = (item.name ?? item.title ?? '').toString().toLowerCase();
                    return field.includes(q);
                });
                return [cat, filteredList];
            })
        );

        setFilteredItems(filtered);


    }, [items, query, category])






    return <div className="categorieslist">


        <Box sx={{ padding: 1, display: 'flex', mr: 1, gap: 1 }}>
            <TextField
                value={query}
                onChange={e => setQuery(e.target.value)}
                fullWidth
                placeholder={"Filter in all categories"}
                size="small"
                variant="outlined"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }
                }}
            />
            <FormControl size="small" variant="outlined">
                <InputLabel>Category</InputLabel>
                <Select

                    value={category}
                    label="Category"
                    onChange={e => setCategory(e.target.value)}
                    sx={{ minWidth: 160 }}
                >
                    <MenuItem value="all">All categories</MenuItem>
                    <MenuItem value="films">Films</MenuItem>
                    <MenuItem value="people">People</MenuItem>
                    <MenuItem value="planets">Planets</MenuItem>
                    <MenuItem value="vehicles">Vehicles</MenuItem>
                    <MenuItem value="starships">Starships</MenuItem>
                    <MenuItem value="species">Species</MenuItem>
                </Select>
            </FormControl>
        </Box>
        {status === "loading" ? <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            minHeight: '100vh',
        }}>
            <CircularProgress />

            <Typography variant="p1" color="primary">Loading categories</Typography>
        </Box> : null}


        <Box sx={{
            bgcolor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 1,
            borderRadius: 1,
            maxWidth: 200
        }}>
            <Typography variant="h5" color="#ffeb02">Films ({filteredItems?.films?.length})</Typography>
        </Box>
        <Grid

            container
            spacing={2}
            wrap="nowrap"
            sx={{
                overflowX: 'auto',
                py: 2,

                '&::-webkit-scrollbar': { display: 'none' },

                scrollbarWidth: 'none'
            }}
        >

            {filteredItems?.films?.map((film, index) => (
                <FilmCard key={'filmcard' + index} {...film} />
            ))}


        </Grid>
        <Box sx={{
            bgcolor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 1,
            borderRadius: 1,
            maxWidth: 200
        }}>
            <Typography variant="h5" color="#ffeb02">People ({filteredItems?.people?.length})</Typography>

        </Box>
        <Grid
            container
            spacing={2}
            wrap="nowrap"
            sx={{
                overflowX: 'auto',
                py: 2,


                scrollbarWidth: 'none'
            }}
        >

            {filteredItems?.people?.map((people, index) => (
                <PeopleCard key={'peoplecard' + index} {...people} />
            ))}
        </Grid>
        <Box sx={{
            bgcolor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 1,
            borderRadius: 1,
            maxWidth: 200
        }}>

            <Typography variant="h5" color="#ffeb02">Planets ({filteredItems?.planets?.length})</Typography>
        </Box>
        <Grid
            container
            spacing={2}
            wrap="nowrap"
            sx={{
                overflowX: 'auto',
                py: 2,


                scrollbarWidth: 'none'
            }}
        >

            {filteredItems?.planets?.map((planet, index) => (
                <PlanetCard key={'planetcard' + index} {...planet} />
            ))}
        </Grid>
        <Box sx={{
            bgcolor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 1,
            borderRadius: 1,
            maxWidth: 200
        }}>

            <Typography variant="h5" color="#ffeb02">Starships ({filteredItems?.starships?.length})</Typography>
        </Box>
        <Grid
            container
            spacing={2}
            wrap="nowrap"
            sx={{
                overflowX: 'auto',
                py: 2,


                scrollbarWidth: 'none'
            }}
        >

            {filteredItems?.starships?.map((starship, index) => (
                <StarshipCard key={'starshipcard' + index} {...starship} />
            ))}
        </Grid>

        <Box sx={{
            bgcolor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 1,
            borderRadius: 1,
            maxWidth: 200
        }}>

            <Typography variant="h5" color="#ffeb02">Vehicles ({filteredItems?.vehicles?.length})</Typography>
        </Box>
        <Grid
            container
            spacing={2}
            wrap="nowrap"
            sx={{
                overflowX: 'auto',
                py: 2,


                scrollbarWidth: 'none'
            }}
        >

            {filteredItems?.vehicles?.map((vehicle, index) => (
                <VehicleCard key={'vehiclecard' + index} {...vehicle} />
            ))}
        </Grid>
        <Box sx={{
            bgcolor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 1,
            borderRadius: 1,
            maxWidth: 200
        }}>

            <Typography variant="h5" color="#ffeb02">Species ({filteredItems?.species?.length})</Typography>
        </Box>
        <Grid
            container
            spacing={2}
            wrap="nowrap"
            sx={{
                overflowX: 'auto',
                py: 2,


                scrollbarWidth: 'none'
            }}
        >

            {filteredItems?.species?.map((specie, index) => (
                <SpieceCard key={'spiececard' + index} {...specie} />
            ))}
        </Grid>





    </div>
}


export default CategoriesList