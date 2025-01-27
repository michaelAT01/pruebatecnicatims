import React from 'react'

export default function Home() {
    return (
        <div className='w-full flex flex-col justify-center text-center items-center space-y-4'>
            <h2 className='text-md font-bold mt-4'>Inicio</h2>
            <img className='w-24' src='./src/assets/logo tims.jpg' />
            <p className='text-center font-bold text-sm w-64'>
                Aplicación de Lista de Peliculas y Series.
                Esta aplicacion esta en su base beta
                por ende comunicar anomalías, saludos.
            </p>
        </div>
    )
}
