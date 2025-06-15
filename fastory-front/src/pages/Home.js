import { useSelector } from "react-redux";
import SignupFields from "../components/SignupFields";
import Typography from '@mui/material/Typography';
import { useEffect } from "react";

import { useNavigate } from 'react-router-dom';
import { Box } from "@mui/material";



const Home = () => {
    const navigate = useNavigate();

    const { username, token } = useSelector(state => state.auth);


    // vérification si user n'est pas déjà connecté
    useEffect(() => {
        if (username && token) {
            navigate('/dashboard');

        }
    }, [username, token])

    return <div className="homepage">
        <div styles={{ flex: 1 }}>

            <Box sx={{
                backgroundColor: "#fee81f",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
                mb: 4,
                borderRadius: 2,
                opacity: 0.9
            }}>
                <Typography color="primary" variant="h5" >Star Wars Rebels Alliance Search System</Typography>

            </Box>
            <SignupFields />
        </div>


        <footer className="footer">
            <Typography variant="body2" color="primary">
                Made with ❤️ by Andranick for Fastory
            </Typography>
        </footer>

    </div>
}

export default Home;