import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material"
import PeopleCard from "./PeopleCard";
import FilmCard from "./FilmCard";




const PlanetCardDetails = (props) => {

    return <Card>
        <Typography variant="h4">Planet Details</Typography>
        <CardHeader
            title={props.name}
            subheader={props.terrain}

        />
        <CardContent sx={{
            overflowY: 'auto',
            px: 2,
            pt: 1,
        }}>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Climate: {props.climate}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Diameter: {props.diameter}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Gravity: {props.gravity}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Population: {props.population}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Rotation period: {props.rotation_period}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Orbital period: {props.orbital_period}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Surface water: {props.surface_water}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Surface water: {props.surface_water}</Typography>


            <Typography variant="h6">Residents ({props?.peopleWithDetails?.length})</Typography>
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

                {props?.peopleWithDetails?.map((people, index) => (
                    <PeopleCard key={'peoplecarddetails' + index} {...people} />
                ))}
            </Grid>

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


        </CardContent>

    </Card>
}

export default PlanetCardDetails