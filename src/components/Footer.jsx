
const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow-md m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">TIMS</a>. Todos los derechos reservados.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="/" className="hover:underline me-4 md:me-6">Inicio</a>
                    </li>
                    <li>
                        <a href="/login" className="hover:underline me-4 md:me-6">Inicio de Sesión</a>
                    </li>
                    <li>
                        <a href="/movies" className="hover:underline me-4 md:me-6">Peliculas</a>
                    </li>
                    <li>
                        <a href="/series" className="hover:underline">Series</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
