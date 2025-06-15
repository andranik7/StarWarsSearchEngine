import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import idExtractor from "../helpers/idExtractor";



const PlanetCard = (props) => {

    const navigate = useNavigate();

    const redirect = () => {
        const id = idExtractor(props.url);
        navigate(`/planet/${id}`)
    }


    return <Card sx={{ maxWidth: 345, minWidth: 345 }}>
        <CardHeader
            title={props.name}
            subheader={props.terrain}
        />
        <CardContent sx={{
            height: 80,
            overflowY: 'auto',
            px: 2,
            pt: 1,
        }}>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Climate: {props.climate}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Diameter: {props.diameter}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Gravity: {props.gravity}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Population: {props.population}</Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={redirect}>See more</Button>
        </CardActions>
    </Card>
}

export default PlanetCard