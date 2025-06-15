import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material"
import PeopleCard from "./PeopleCard";
import FilmCard from "./FilmCard";




const VehicleCardDetails = (props) => {

    return <Card>
        <Typography variant="h4" sx={{ ml: 2, mt: 1 }}> 🚗 Vehicle Details</Typography>
        <CardHeader
            title={props.name}
            subheader={props.model}

        />
        <CardContent sx={{
            overflowY: 'auto',
            px: 2,
            pt: 1,
        }}>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Manufacturer: {props.manufacturer}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Length: {props.length}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Crew: {props.crew}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Passengers: {props.passengers}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Cost in credits: {props.cost_in_credits}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Max atmosphering speed: {props.max_atmosphering_speed}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Cargo capacity: {props.cargo_capacity}</Typography>



            <Typography variant="h6">Pilots ({props?.peopleWithDetails?.length})</Typography>
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

                {props?.peopleWithDetails?.map((pilot, index) => (
                    <PeopleCard key={'pilotsdetails' + index} {...pilot} />
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

export default VehicleCardDetails