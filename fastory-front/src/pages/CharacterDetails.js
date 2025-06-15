import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import config from "../config";
import { useSelector } from "react-redux";
import axios from "axios";
import FilmCardDetails from "../components/FilmCardDetails";
import PeopleCardDetails from "../components/PeopleCardDetails";


const CharacterDetails = (props) => {
    const { id } = useParams();
    const token = useSelector(state => state.auth.token);


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [character, setCharacter] = useState(null);

    const onGetCharacterById = async () => {
        try {
            const { data } = await axios.get(config.apiURI + "/people/" + id, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCharacter(data);

        } catch (e) {
            setError("Error getting character")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        onGetCharacterById()
    }, [])


    if (loading) {
        return <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            minHeight: '100vh',
        }}>
            <CircularProgress />

            <Typography variant="p1" color="primary">Loading character with all data. It may take some time...</Typography>
        </Box>
    }

    if (error) {
        return <div>
            <Typography color="error">{error}</Typography>
        </div>
    }



    if (character) {
        return <div >
            <Header />
            <PeopleCardDetails {...character} />
        </div>
    }

    return null



}

export default CharacterDetails