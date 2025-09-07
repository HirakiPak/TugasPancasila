
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="bg-purple-700 text-white shadow-lg">
            <div className="container mx-auto px-4 md:px-8 py-6 text-center">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Ujian Sub-Tes Karakter Pancasila
                </h1>
                <p className="mt-2 text-purple-200 text-lg">
                    Membangun Karakter Bangsa di Era Disrupsi
                </p>
            </div>
        </header>
    );
};
