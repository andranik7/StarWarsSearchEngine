import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import config from "../config";
import { useSelector } from "react-redux";
import axios from "axios";
import VehicleCardDetails from "../components/VehicleCardDetails";


const VehicleDetails = (props) => {
    const { id } = useParams();
    const token = useSelector(state => state.auth.token);


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [vehicle, setVehicle] = useState(null);

    const onGetVehicleById = async () => {
        try {
            const { data } = await axios.get(config.apiURI + "/vehicles/" + id, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setVehicle(data);

        } catch (e) {
            setError("Error getting vehicle")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        onGetVehicleById()
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

            <Typography variant="p1" color="primary">Loading vehicle with all data. It may take some time...</Typography>
        </Box>
    }

    if (error) {
        return <div>
            <Typography color="error">{error}</Typography>
        </div>
    }



    if (vehicle) {
        return <div >
            <Header />
            <VehicleCardDetails {...vehicle} />
        </div>
    }

    return null



}

export default VehicleDetails