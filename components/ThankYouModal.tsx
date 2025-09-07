import React from 'react';

interface ThankYouModalProps {
    onFinish: () => void;
}

export const ThankYouModal: React.FC<ThankYouModalProps> = ({ onFinish }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 animate-fade-in">
            <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-auto transform transition-all scale-100 opacity-100">
                <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h2 className="text-2xl font-bold text-purple-800 mb-3">Tes Selesai!</h2>
                <p className="text-gray-600 mb-8">
                    Terimakasih sudah menjawab sub tes dari Kelompok 8.
                </p>
                <button
                    onClick={onFinish}
                    className="bg-purple-600 text-white font-bold py-3 px-12 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform transform hover:scale-105 duration-300 text-lg"
                >
                    Selesai
                </button>
            </div>
        </div>
    );
};
