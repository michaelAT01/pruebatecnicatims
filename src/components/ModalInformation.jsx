import React, { useState } from 'react';

const ModalInformation = ({
    openModalActivate,
    setOpenModalActivate,
    data
}) => {
    //  const [isOpen, setIsOpen] = useState(openModalActivate);
    const closeModal = () => { setOpenModalActivate(false) };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 min-w-screen">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center">
                <div className="bg-white rounded-lg p-8 w-42 md:w-1/3 ">
                    <img src={data.url} className=' w-[100%] h-40 rounded' />
                    <h2 className="text-xl font-bold mb-4 md:mt-2">{data.title}</h2>
                    <p className="mb-4">
                        {data.description}
                    </p>
                    <p className="mb-4 font-bold text-sm rounded bg-gray-200 w-12 justify-center text-center">
                        {data.releaseYear}
                    </p>
                    <button
                        onClick={closeModal}
                        className="bg-red-500 text-white px-4 py-2 rounded w-24 text-sm md:w-32"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalInformation;