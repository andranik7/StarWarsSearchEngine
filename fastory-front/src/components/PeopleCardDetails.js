import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material"
import PlanetCard from "./PlanetCard";
import StarshipCard from "./StarshipCard";
import VehicleCard from "./VehicleCard";
import SpieceCard from "./SpieceCard";
import FilmCard from "./FilmCard";



const PeopleCardDetails = (props) => {

    return <Card>
        <Typography variant="h3">Character Details</Typography>

        <CardHeader
            title={props.name}
            subheader={props.gender}
        />
        <CardContent sx={{
            overflowY: 'auto',
            px: 2,
            pt: 1,
        }}>


            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Height: {props.height}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Mass: {props.mass}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Hair color: {props.hair_color}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Skin color: {props.skin_color}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Eye color: {props.eye_color}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Birth year: {props.birth_year}</Typography>


            <Typography variant="h6">Films ({props?.filmsWithDetails?.length})</Typography>
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

                {props?.filmsWithDetails?.map((film, index) => (
                    <FilmCard key={'filmcarddetails' + index} {...film} />
                ))}
            </Grid>

            <Typography variant="h6">Planets ({props?.planetsWithDetails?.length})</Typography>
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

                {props?.planetsWithDetails?.map((planet, index) => (
                    <PlanetCard key={'planetcarddetails' + index} {...planet} />
                ))}
            </Grid>

            <Typography variant="h6">Starships ({props?.starshipsWithDetails?.length})</Typography>
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

                {props?.starshipsWithDetails?.map((starship, index) => (
                    <StarshipCard key={'starshipcarddetails' + index} {...starship} />
                ))}
            </Grid>

            <Typography variant="h6">Vehicles ({props?.vehiclesWithDetails?.length})</Typography>
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

                {props?.vehiclesWithDetails?.map((vehicle, index) => (
                    <VehicleCard key={'vehiclecarddetails' + index} {...vehicle} />
                ))}
            </Grid>

            <Typography variant="h6">Species ({props?.speciesWithDetails?.length})</Typography>
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

                {props?.speciesWithDetails?.map((specie, index) => (
                    <SpieceCard key={'speciecarddetails' + index} {...specie} />
                ))}
            </Grid>


        </CardContent>

    </Card>
}

export default PeopleCardDetails