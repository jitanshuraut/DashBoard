import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';

function Login() {

    const navigate = useNavigate();
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const handleSubmit_login = async (e) => {

        const response = await fetch("http://localhost:5001/general/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', "true");
            navigate("/dashboard")


        }
        else {
            alert("Invalid credentials");
        }
    }





    return (
        <Box sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            m: "auto",


            height: `${window.innerHeight}px`,
            backgroundColor: "#090D1F"
        }}>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                fontFamily: " 'Montserrat', sans-serif",
                p: 2,

                backgroundColor: "white",
                borderRadius: "10px"

            }}>
                <Typography variant="h5" sx={{
                    m: 2,
                    fontWeight: "600",

                    fontFamily: " 'Montserrat', sans-serif"
                }} color="initial">Nice to see you again</Typography>
                <TextField onChange={(e) => { setemail(e.target.value) }} id="outlined-basic" value={email} label="Email" sx={{ m: 2, borderColor: "primary.main", backgroundColor: "white" }} variant="outlined" />
                <TextField onChange={(e) => { setpassword(e.target.value) }} id="outlined-basic" value={password} label="Password" sx={{ m: 2, borderColor: "primary.main", backgroundColor: "white" }} variant="outlined" />

                <Button variant="contained" sx={{
                    m: 2,
                    p: 2,
                    color: "white",
                    fontFamily: " 'Montserrat', sans-serif"
                }} onClick={handleSubmit_login}>Login</Button>

            </Box>
            <Box sx={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "white",
                borderRadius: "10px"

            }}>
                <img src="login.gif" alt="" style={{ width: "80%" }} />
            </Box>
        </Box>
    )
}

export default Login