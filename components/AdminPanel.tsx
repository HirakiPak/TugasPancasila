import React, { useState } from 'react';

interface AdminPanelProps {
    onDownload: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onDownload }) => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');

    const handleAuth = () => {
        if (password === 'fkip123') {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Password salah!');
        }
    };
    
    return (
        <section className="mt-12 bg-purple-50 rounded-2xl p-6 md:p-8 border border-purple-200 shadow-lg">
            <h3 className="text-2xl font-bold text-purple-800 mb-4 text-center">Panel Admin</h3>
            {!isAuthenticated ? (
                <div className="max-w-sm mx-auto">
                    <p className="text-center text-gray-600 mb-4">Masukkan password untuk mengunduh hasil.</p>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
                            placeholder="Password Admin"
                            className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            aria-label="Password Admin"
                        />
                        <button
                            onClick={handleAuth}
                            className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 whitespace-nowrap"
                        >
                            Otentikasi
                        </button>
                    </div>
                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                </div>
            ) : (
                <div className="max-w-md mx-auto text-center">
                    <p className="text-green-700 font-semibold mb-4">Otentikasi berhasil. Unduh rekapitulasi hasil seluruh peserta.</p>
                     <div className="flex justify-center">
                        <button
                            onClick={onDownload}
                            className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-transform transform hover:scale-105 duration-300 text-lg"
                        >
                            Unduh Rekap Excel
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};
