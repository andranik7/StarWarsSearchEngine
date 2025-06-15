import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import idExtractor from "../helpers/idExtractor";



const SpieceCard = (props) => {

    const navigate = useNavigate();

    const redirect = () => {
        const id = idExtractor(props.url);
        navigate(`/spiece/${id}`)
    }

    return <Card sx={{ maxWidth: 345, minWidth: 345 }}>
        <CardHeader
            title={props.name}
            subheader={props.classification}
        />
        <CardContent sx={{
            height: 80,
            overflowY: 'auto',
            px: 2,
            pt: 1,
        }}>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Designation: {props.designation}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Average height: {props.average_height}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Skin colors: {props.skin_colors}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Hair colors: {props.hair_colors}</Typography>

        </CardContent>
        <CardActions>
            <Button size="small" onClick={redirect}>See more</Button>
        </CardActions>
    </Card>
}

export default SpieceCard