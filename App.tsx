import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { UserInfoForm } from './components/UserInfoForm';
import { Quiz } from './components/Quiz';
import { ThankYouModal } from './components/ThankYouModal';
import { QUIZ_QUESTIONS } from './constants';
import type { Answers, Participant, UserInfo } from './types';
import { WelcomeScreen } from './components/WelcomeScreen';


const App: React.FC = () => {
    const [appState, setAppState] = useState<'welcome' | 'userInfo' | 'quiz' | 'thankYou'>('welcome');
    const [answers, setAnswers] = useState<Answers>({});
    const [currentUserInfo, setCurrentUserInfo] = useState<UserInfo | null>(null);
    const [allParticipants, setAllParticipants] = useState<Participant[]>([]);

    const handleContinueFromWelcome = () => {
        setAppState('userInfo');
    };

    const handleStartQuiz = (userInfo: UserInfo) => {
        setCurrentUserInfo(userInfo);
        setAppState('quiz');
    };

    const handleSubmit = () => {
        if (Object.keys(answers).length < QUIZ_QUESTIONS.length) {
            alert('Harap jawab semua pertanyaan sebelum mengirim.');
            return;
        }

        const score = QUIZ_QUESTIONS.reduce((total, question, index) => {
            return answers[index] === question.correctAnswer ? total + 1 : total;
        }, 0);
        const percentage = (score / QUIZ_QUESTIONS.length) * 100;

        if (currentUserInfo) {
            const newParticipant: Participant = {
                ...currentUserInfo,
                answers,
                score,
                percentage,
            };
            setAllParticipants(prev => [...prev, newParticipant]);
        }
        
        setAppState('thankYou');
        window.scrollTo(0, 0);
    };

    const handleFinishQuiz = () => {
        setAnswers({});
        setCurrentUserInfo(null);
        setAppState('welcome');
    };

    const handleDownload = () => {
        if (allParticipants.length === 0) {
            alert('Belum ada data peserta untuk diunduh.');
            return;
        }

        const dataToExport = allParticipants.map(p => ({
            'Nama': p.name,
            'NIM': p.nim,
            'Jurusan': p.major,
            'Skor Benar': p.score,
            'Total Soal': QUIZ_QUESTIONS.length,
            'Nilai (%)': p.percentage.toFixed(2),
        }));

        const ws = (window as any).XLSX.utils.json_to_sheet(dataToExport);
        const wb = (window as any).XLSX.utils.book_new();
        (window as any).XLSX.utils.book_append_sheet(wb, ws, 'Hasil Tes Peserta');
        (window as any).XLSX.writeFile(wb, 'Rekap_Hasil_Tes_Pancasila.xlsx');
    };

    const renderContent = () => {
        switch (appState) {
            case 'userInfo':
                return (
                    <UserInfoForm onStartQuiz={handleStartQuiz} />
                );
            case 'quiz':
                return (
                    <Quiz
                        questions={QUIZ_QUESTIONS}
                        answers={answers}
                        onAnswerChange={handleAnswerChange}
                        onSubmit={handleSubmit}
                    />
                );
             case 'thankYou':
                return <ThankYouModal onFinish={handleFinishQuiz} />;
            case 'welcome':
            default:
                return (
                    <WelcomeScreen onContinue={handleContinueFromWelcome} onDownload={handleDownload} />
                );
        }
    };
    
    const handleAnswerChange = useCallback((questionIndex: number, answer: string) => {
        setAnswers(prev => ({ ...prev, [questionIndex]: answer }));
    }, []);


    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white font-sans text-gray-800">
            <Header />
            <main className="container mx-auto p-4 md:p-8">
                <div className={`bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-purple-100 ${appState === 'thankYou' ? 'blur-sm' : ''}`}>
                    {renderContent()}
                </div>
                 {appState === 'thankYou' && <ThankYouModal onFinish={handleFinishQuiz} />}
            </main>
            <footer className="text-center p-6 text-gray-500 mt-8">
                <p>&copy; 2024 Ujian Sub-Tes Karakter Pancasila. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;