import { mockProjects, mockPosts, mockUserProfiles, mockConversations, mockUsers } from './mockData';
import { Conversation, Post, Project, Topic, UserProfile } from '../types';
import { mockTopics } from './mockTopics';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchUsers = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockUsers);
        }, 500);
    });
};

export const fetchProjects = async (): Promise<Project[]> => {
    await delay(300);
    return mockProjects;
};

export const fetchPosts = async (): Promise<Post[]> => {
    await delay(500);
    return mockPosts;
};

export const fetchUserProfiles = async (): Promise<UserProfile[]> => {
    await delay(700);
    return mockUserProfiles;
};

export const fetchTopics = async (): Promise<Topic[]> => {
    await delay(200);
    return mockTopics;
}

export const fetchConversations = async (): Promise<Conversation[]> => {
    await delay(400);
    return mockConversations;
};