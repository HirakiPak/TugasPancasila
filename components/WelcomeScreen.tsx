import React from 'react';
import { GROUP_MEMBERS } from '../constants';
import type { GroupMember } from '../types';
import { AdminPanel } from './AdminPanel';

interface WelcomeScreenProps {
    onContinue: () => void;
    onDownload: () => void;
}

const StudentCard: React.FC<{ member: GroupMember }> = ({ member }) => (
    <div className="bg-white rounded-xl shadow-lg p-4 text-center border border-purple-200 transition-transform transform hover:scale-105 hover:shadow-purple-200 duration-300 flex flex-col justify-center items-center h-full">
        <h4 className="font-bold text-purple-900 text-md">{member.name}</h4>
        <p className="text-sm text-gray-600 mt-2">{member.nim}</p>
        <p className="text-xs text-gray-500 mt-1">{member.major}</p>
    </div>
);

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onContinue, onDownload }) => {
    return (
        <>
            <div className="text-center animate-fade-in">
                <h2 className="text-4xl font-extrabold text-purple-800 mb-4">Kelompok 8</h2>
                <p className="text-gray-600 mb-10 text-lg">Anggota Kelompok Pengembang Aplikasi Tes</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 mb-12">
                    {GROUP_MEMBERS.map((member, index) => (
                        <StudentCard key={index} member={member} />
                    ))}
                </div>

                <button
                    onClick={onContinue}
                    className="bg-purple-600 text-white font-bold py-3 px-12 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform transform hover:scale-105 duration-300 text-lg"
                >
                    Lanjutkan
                </button>
            </div>
            <AdminPanel onDownload={onDownload} />
        </>
    );
};