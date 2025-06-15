import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material"
import PeopleCard from "./PeopleCard";
import PlanetCard from "./PlanetCard";
import StarshipCard from "./StarshipCard";
import VehicleCard from "./VehicleCard";
import SpieceCard from "./SpieceCard";



const FilmCardDetails = (props) => {

    return <Card>
        <Typography variant="h4" sx={{ ml: 2, mt: 1 }}> 🎥 Film Details</Typography>
        <CardHeader
            title={props.title}
            subheader={props.producer}

        />
        <CardContent sx={{
            overflowY: 'auto',
            px: 2,
            pt: 1,
        }}>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Director : {props.director}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Release date : {props.release_date}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {props.opening_crawl}
            </Typography>


            <Typography variant="h6">People ({props?.charactersWithDetails?.length})</Typography>
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

                {props?.charactersWithDetails?.map((people, index) => (
                    <PeopleCard key={'peoplecarddetails' + index} {...people} />
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

export default FilmCardDetails