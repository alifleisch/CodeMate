import { mockUsers, mockProjects } from '../mock/data';
import { Project } from '../types';

export const fetchUsers = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockUsers);
        }, 500); // Simulates a 500ms network delay
    });
};

export const fetchProjects = async (): Promise<Project[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockProjects);
        }, 500); // Simulates a 500ms network delay
    });
};