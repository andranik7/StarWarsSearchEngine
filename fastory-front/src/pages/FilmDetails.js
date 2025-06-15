import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import config from "../config";
import { useSelector } from "react-redux";
import axios from "axios";
import FilmCardDetails from "../components/FilmCardDetails";


const FilmDetails = () => {
    const { id } = useParams();
    const token = useSelector(state => state.auth.token);


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [film, setFilm] = useState(null);

    const onGetFilmById = async () => {
        try {
            const { data } = await axios.get(config.apiURI + "/films/" + id, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setFilm(data);

        } catch (e) {
            setError("Error getting film")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        onGetFilmById()
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

            <Typography variant="p1" color="primary">Loading films with all data. It may take some time...</Typography>
        </Box>
    }

    if (error) {
        return <div>
            <Typography color="error">{error}</Typography>
        </div>
    }



    if (film) {
        return <div >
            <Header />
            <FilmCardDetails {...film} />
        </div>
    }

    return null



}

export default FilmDetails