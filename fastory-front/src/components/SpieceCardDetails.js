import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material"
import PeopleCard from "./PeopleCard";
import FilmCard from "./FilmCard";




const SpieceCardDetails = (props) => {

    return <Card>
        <Typography variant="h4">Specie Details</Typography>
        <CardHeader
            title={props.name}
            subheader={props.classification}

        />
        <CardContent sx={{
            overflowY: 'auto',
            px: 2,
            pt: 1,
        }}>


            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Designation: {props.designation}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Average height: {props.average_height}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Skin colors: {props.skin_colors}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Hair colors: {props.hair_colors}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Language: {props.language}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Average lifespan: {props.average_lifespan}</Typography>


            <Typography variant="h6">People ({props?.peopleWithDetails?.length})</Typography>
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

export default SpieceCardDetails