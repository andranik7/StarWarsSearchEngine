import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import idExtractor from "../helpers/idExtractor";



const VehicleCard = (props) => {

    const navigate = useNavigate();

    const redirect = () => {
        const id = idExtractor(props.url);
        navigate(`/vehicle/${id}`)
    }
    return <Card sx={{ maxWidth: 345, minWidth: 345 }}>
        <CardHeader
            title={props.name}
            subheader={props.model}
        />
        <CardContent sx={{
            height: 80,
            overflowY: 'auto',
            px: 2,
            pt: 1,
        }}>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Manufacturer: {props.manufacturer}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Length: {props.length}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Crew: {props.crew}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Passengers: {props.passengers}</Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={redirect}>See more</Button>
        </CardActions>
    </Card>
}

export default VehicleCard