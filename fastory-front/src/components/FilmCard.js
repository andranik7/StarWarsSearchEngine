import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import idExtractor from "../helpers/idExtractor";



const FilmCard = (props) => {

    const navigate = useNavigate();

    const redirect = () => {
        const id = idExtractor(props.url);
        navigate(`/film/${id}`)
    }

    return <Card sx={{ maxWidth: 345, minWidth: 345 }}>
        <CardHeader


            title={props.title}
            subheader={props.producer}
        />
        <CardContent sx={{
            height: 200,
            overflowY: 'auto',
            px: 2,
            pt: 1,
        }}>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {props.opening_crawl}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={redirect}>See more</Button>
        </CardActions>
    </Card>
}

export default FilmCard