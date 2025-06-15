import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import config from "../config";
import { useSelector } from "react-redux";
import axios from "axios";
import StarshipCardDetails from "../components/StarshipCardDetails";


const StarshipDetails = () => {
    const { id } = useParams();
    const token = useSelector(state => state.auth.token);


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [starship, setStarship] = useState(null);

    const onGetStarshipById = async () => {
        try {
            const { data } = await axios.get(config.apiURI + "/starships/" + id, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setStarship(data);

        } catch (e) {
            setError("Error getting starship")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        onGetStarshipById()
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

            <Typography variant="p1" color="primary">Loading starship with all data. It may take some time...</Typography>
        </Box>
    }

    if (error) {
        return <div>
            <Typography color="error">{error}</Typography>
        </div>
    }



    if (starship) {
        return <div >
            <Header />
            <StarshipCardDetails {...starship} />
        </div>
    }

    return null



}

export default StarshipDetails