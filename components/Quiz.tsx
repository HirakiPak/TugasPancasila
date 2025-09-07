
import React from 'react';
import type { Question, Answers } from '../types';

interface QuizProps {
    questions: Question[];
    answers: Answers;
    onAnswerChange: (questionIndex: number, answer: string) => void;
    onSubmit: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ questions, answers, onAnswerChange, onSubmit }) => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-purple-800 mb-2 text-center">Soal Tes Karakter Pancasila</h2>
            <p className="text-center text-gray-600 mb-8">Pilih salah satu jawaban yang paling tepat.</p>
            <div className="space-y-8">
                {questions.map((q, index) => (
                    <div key={index} className="border-b border-purple-100 pb-6 last:border-b-0">
                        <p className="font-semibold text-lg text-gray-800 mb-4">{index + 1}. {q.question}</p>
                        <div className="space-y-3">
                            {Object.entries(q.options).map(([key, value]) => (
                                <label
                                    key={key}
                                    className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                                        answers[index] === key
                                            ? 'bg-purple-100 border-purple-500 shadow-inner'
                                            : 'bg-gray-50 border-gray-200 hover:border-purple-300'
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value={key}
                                        checked={answers[index] === key}
                                        onChange={() => onAnswerChange(index, key)}
                                        className="form-radio h-5 w-5 text-purple-600 focus:ring-purple-500"
                                    />
                                    <span className="ml-4 text-gray-700">{key}. {value}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-10 text-center">
                <button
                    onClick={onSubmit}
                    className="bg-purple-600 text-white font-bold py-3 px-12 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform transform hover:scale-105 duration-300 text-lg"
                >
                    Kirim Jawaban
                </button>
            </div>
        </div>
    );
};
