import { Button, Card, CardContent, Stack, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authThunks";
import { motion, useAnimation } from 'framer-motion';


const SignupFields = () => {
    const controls = useAnimation();

    const dispatch = useDispatch();

    const { status, error } = useSelector(state => state.auth);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = () => {
        dispatch(loginUser({ username, password }));
    }

    // pour une petite animation quand le login fail
    useEffect(() => {
        if (error) {
            controls.start({
                x: [0, -10, 10, -10, 10, 0],
                transition: { duration: 0.6 },
            });
        }
    }, [error, controls]);


    return (
        <motion.div
            animate={controls}
            style={{ display: 'inline-block' /* ou ton style de card */ }}
        >
            <Card
                variant="outlined"
                sx={{
                    width: 400,
                    bgcolor: 'rgba(255,255,255,0.9)',
                }}
            >
                <CardContent >
                    <Stack spacing={2} direction="column">
                        <TextField label="Username" variant="outlined" value={username} onChange={e => setUsername(e.target.value)} />
                        <TextField label="Password" variant="outlined" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <Button loading={status === "loading"} variant="contained" onClick={onLogin}>Login</Button>
                        {error ? <Typography sx={{ maxWidth: 300, textAlign: "center", alignSelf: "center" }} variant="p1" color="red">{error}</Typography> : null}
                    </Stack>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default SignupFields

