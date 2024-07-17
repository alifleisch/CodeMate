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
        }, 500);
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
            picture: "path/to/dimi.jpg",
        },
        {
            id: 2,
            name: "Alice",
            age: 25,
            skills: ["React", "Java"],
            level: "Intermediate",
            picture: "path/to/alice.jpg",
        },
        {
            id: 3,
            name: "Karl",
            age: 18,
            skills: ["Python", "Django"],
            level: "Junior",
            picture: "path/to/karl.jpg",
        },
    ];
};