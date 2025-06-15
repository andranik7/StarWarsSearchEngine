import { Button, Card, CardContent, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authThunks";



const SignupFields = () => {
    const dispatch = useDispatch();

    const { status, error } = useSelector(state => state.auth);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = () => {
        dispatch(loginUser({ username, password }));
    }


    return (
        <Card
            variant="outlined"
            sx={{

                bgcolor: 'rgba(255,255,255,0.9)',
            }}
        >
            <CardContent>
                <Stack spacing={2} direction="column">
                    <TextField label="Username" variant="outlined" value={username} onChange={e => setUsername(e.target.value)} />
                    <TextField label="Password" variant="outlined" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <Button loading={status === "loading"} variant="contained" onClick={onLogin}>Login</Button>
                    {error ? <Typography variant="p1" color="red">{error}</Typography> : null}
                </Stack>
            </CardContent>
        </Card>
    )
}

export default SignupFields

