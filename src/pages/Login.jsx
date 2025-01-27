import React from 'react';
import { TextField, Button, Container } from '@mui/material';

const Login = () => (
    <Container className='flex flex-col justify-center content-center text-center place-content-center items-center space-y-8'>
        <h2 className='text-md font-bold mt-4'>Inicio de sesión</h2>
        <img className='w-32' src='./src/assets/logo tims.jpg' />
        <TextField label="Correo" fullWidth margin="normal" />
        <TextField type="Password" label="Contraseña" fullWidth margin="normal" />
        <button className="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded">
            Iniciar sesión
        </button>
    </Container>
);

export default Login;