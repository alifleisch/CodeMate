import { mockProjects, mockPosts, mockUserProfiles, mockConversations, mockUsers } from './mockData';
import { Conversation, Post, Project, Topic, UserProfile } from '../types';
import { mockTopics } from './mockTopics';
import { mockUser } from './mockUser';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchUsers = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockUsers);
        }, 500);
    });
};

export const fetchProjects = async (): Promise<Project[]> => {
    await delay(200);
    return mockProjects;
};

export const fetchPosts = async (): Promise<Post[]> => {
    return mockPosts;
};

export const fetchUserProfiles = async (): Promise<UserProfile[]> => {
    await delay(300);
    return mockUserProfiles;
};

export const fetchTopics = async (): Promise<Topic[]> => {
    await delay(200);
    return mockTopics;
}

export const fetchConversations = async (): Promise<Conversation[]> => {
    return mockConversations;
};

interface AppContext {
    isLoggedIn?: boolean;
    user?: typeof mockUser;
};

let context: AppContext = {};

export async function postLogin(email: string, password: string): Promise<unknown> {
    await delay(400);

    if (mockUser.email === email && password.length >= 6) {
        context.isLoggedIn = true;
        context.user = mockUser;
        return context.user;
    }

    throw new Error("Wrong email or password");
}