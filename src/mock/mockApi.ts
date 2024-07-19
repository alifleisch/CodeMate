import { mockUsers, mockProjects } from './data';
import { Project } from '../types';

export const fetchUsers = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockUsers);
        }, 500);
    });
};

export const fetchProjects = async (): Promise<Project[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockProjects);
        }, 200);
    });
};

export const fetchPosts = async () => {
    return [
        {
            id: 1,
            content: "Looking for collaborators on a React app.",
            author: "User1",
            owner: "User1",
            timestamp: "2024-01-01"
        },
        {
            id: 2,
            content: "Looking for collaborators on a React app.",
            author: "User2",
            owner: "User1",
            timestamp: "2024-01-02"
        },
        {
            id: 3,
            content: "Looking for collaborators on a React app.",
            author: "User2",
            owner: "User2",
            timestamp: "2024-01-03"
        },
        {
            id: 4,
            content: "Looking for collaborators on a React app.",
            author: "User1",
            owner: "User1",
            timestamp: "2024-01-04"
        },
        {
            id: 5,
            content: "Looking for collaborators on a React app.",
            author: "User3",
            owner: "User3",
            timestamp: "2024-01-05"
        },

    ];
};

export const fetchUserProfiles = async () => {
    return [
        {
            id: 1,
            name: "Dimi",
            age: 30,
            skills: ["Angular", "Node.js"],
            level: "Staff",
            picture: "public/54.jpg",
        },
        {
            id: 2,
            name: "Alice",
            age: 25,
            skills: ["React", "Java"],
            level: "Intermediate",
            picture: "public/50.jpg",
        },
        {
            id: 3,
            name: "Karl",
            age: 18,
            skills: ["Python", "Django"],
            level: "Junior",
            picture: "public/3.jpg",
        },
    ];
};

export const fetchConversations = async () => {
    return [
        {
            id: 1,
            user: {
                id: 1,
                name: "Dimi",
                picture: "public/54.jpg",
            },
            lastMessage: "Message from Dimi: Awesome!",
        },
        {
            id: 2,
            user: {
                id: 2,
                name: "Alice",
                picture: "public/50.jpg",
            },
            lastMessage: "Great, talk to you later!",
        },
        {
            id: 3,
            user: {
                id: 3,
                name: "Karl",
                picture: "public/3.jpg",
            },
            lastMessage: "I\'m doing well, just busy with studies.",
        },
    ];
};