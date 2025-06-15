import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import config from "../config";
import { useSelector } from "react-redux";
import axios from "axios";
import FilmCardDetails from "../components/FilmCardDetails";
import PlanetCardDetails from "../components/PlanetCardDetails";


const PlanetDetails = (props) => {
    const { id } = useParams();
    const token = useSelector(state => state.auth.token);


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [planet, setPlanet] = useState(null);

    const onGetPlanetById = async () => {
        try {
            const { data } = await axios.get(config.apiURI + "/planets/" + id, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setPlanet(data);

        } catch (e) {
            setError("Error getting planet")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        onGetPlanetById()
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

            <Typography variant="p1" color="primary">Loading planet with all data. It may take some time...</Typography>
        </Box>
    }

    if (error) {
        return <div>
            <Typography color="error">{error}</Typography>
        </div>
    }



    if (planet) {
        return <div >
            <Header />
            <PlanetCardDetails {...planet} />
        </div>
    }

    return null



}

export default PlanetDetails