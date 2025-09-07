export interface UserInfo {
    name: string;
    nim: string;
    major: string;
}

export interface Question {
    question: string;
    options: { [key: string]: string };
    correctAnswer: string;
}

export type Answers = {
    [key: number]: string;
};

export interface Participant extends UserInfo {
    answers: Answers;
    score: number;
    percentage: number;
}

export interface GroupMember {
    name: string;
    nim: string;
    major: string;
}