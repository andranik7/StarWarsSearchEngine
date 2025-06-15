import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import config from "../config";
import { useSelector } from "react-redux";
import axios from "axios";
import PlanetCardDetails from "../components/PlanetCardDetails";
import StarshipCardDetails from "../components/StarshipCardDetails";
import VehicleCardDetails from "../components/VehicleCardDetails";
import SpieceCardDetails from "../components/SpieceCardDetails";


const SpieceDetails = (props) => {
    const { id } = useParams();
    const token = useSelector(state => state.auth.token);


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [spiece, setSpiece] = useState(null);

    const onGetSpieceById = async () => {
        try {
            const { data } = await axios.get(config.apiURI + "/spieces/" + id, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setSpiece(data);

        } catch (e) {
            setError("Error getting specie")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        onGetSpieceById()
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

            <Typography variant="p1" color="primary">Loading specie with all data. It may take some time...</Typography>
        </Box>
    }

    if (error) {
        return <div>
            <Typography color="error">{error}</Typography>
        </div>
    }



    if (spiece) {
        return <div >
            <Header />
            <SpieceCardDetails {...spiece} />
        </div>
    }

    return null



}

export default SpieceDetails