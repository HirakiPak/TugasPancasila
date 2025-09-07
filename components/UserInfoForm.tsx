import React, { useState } from 'react';
import type { UserInfo } from '../types';
import { MAJORS } from '../constants';

interface UserInfoFormProps {
    onStartQuiz: (userInfo: UserInfo) => void;
}

export const UserInfoForm: React.FC<UserInfoFormProps> = ({ onStartQuiz }) => {
    const [name, setName] = useState('');
    const [nim, setNim] = useState('');
    const [major, setMajor] = useState(MAJORS[0]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !nim.trim()) {
            alert('Nama dan NIM wajib diisi.');
            return;
        }
        onStartQuiz({ name, nim, major });
    };

    return (
        <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-800 mb-2">Data Diri Peserta</h2>
            <p className="text-gray-600 mb-8">Silakan isi data diri Anda sebelum memulai tes.</p>
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                        placeholder="Masukkan nama lengkap Anda"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="nim" className="block text-sm font-medium text-gray-700 mb-2">
                        NIM (Nomor Induk Mahasiswa)
                    </label>
                    <input
                        type="text"
                        id="nim"
                        value={nim}
                        onChange={(e) => setNim(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                        placeholder="Masukkan NIM Anda"
                        required
                    />
                </div>
                 <div>
                    <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-2">
                        Jurusan
                    </label>
                    <select
                        id="major"
                        value={major}
                        onChange={(e) => setMajor(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition bg-white"
                        required
                    >
                        {MAJORS.map((m) => (
                            <option key={m} value={m}>{m}</option>
                        ))}
                    </select>
                </div>
                <div className="text-center pt-4">
                    <button
                        type="submit"
                        className="bg-purple-600 text-white font-bold py-3 px-12 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform transform hover:scale-105 duration-300 text-lg"
                    >
                        Mulai Tes
                    </button>
                </div>
            </form>
        </div>
    );
};
