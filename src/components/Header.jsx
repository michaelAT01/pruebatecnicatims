import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="bg-gray-800 p-4 w-full h-24 flex">
        <div className="mx-auto flex justify-between items-center w-full">
            <Link to="/" className="text-white text-xl font-bold mr-2">Inicio</Link>
            <div className="space-x-4">
                <Link to="/series" className="text-white hover:underline">Series</Link>
                <Link to="/movies" className="text-white hover:underline">Películas</Link>
                <Link to="/login" className="text-white hover:underline">Inicio de Sesión</Link>
            </div>
        </div>
    </nav>
);

export default Header;