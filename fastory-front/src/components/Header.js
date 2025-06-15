
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { persistor } from "../redux";
import logo from "../assets/logo.png"

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { username } = useSelector(state => state.auth)

    const onLogout = async () => {
        dispatch(logout());
        await persistor.purge();
        navigate('/', { replace: true });

    }

    return <AppBar position="static">
        <Toolbar variant="dense">
            <Box sx={{ flex: 1 }}>
                <IconButton onClick={() => navigate("/dashboard")}>
                    <img
                        src={logo}
                        style={{ height: 30, width: 80 }}
                    />
                </IconButton>
            </Box>


            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <Typography
                    color="secondary"
                >
                    Welcome {username} !
                </Typography>
            </Box>


            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    color="secondary"
                    onClick={onLogout}
                >
                    Log out
                </Button>
            </Box>
        </Toolbar>
    </AppBar>
}

export default Header