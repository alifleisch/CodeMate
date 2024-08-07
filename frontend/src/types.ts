export interface Project {
    id: number;
    title: string;
    description: string;
    owner: string;
};

export interface Post {
    id: number;
    content: string;
    author: string;
    owner: string;
    timestamp: string;
};

export interface UserProfile {
    id: number;
    name: string;
    age: number;
    skills: string[];
    level: string;
    picture: string;
    bio?: string;
    email?: string;
    location?: string;
    projects?: Project[];
};

export interface Topic {
    id: number;
    title: string;
    description: string;
    comments: Post[];
};

export interface User {
    id: number;
    name: string;
    picture: string;
}

export interface Chat {
    id: number;
    user: User;
    messages: string[];
}

export interface Conversations {
    [key: number]: Chat;
}