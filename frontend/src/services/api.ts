import axios from 'axios';
import { Chat, Post, Project, Topic, UserProfile } from '../types';
import { API_URL } from '../constants/url';

export const fetchUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};

export const fetchProjects = async (): Promise<Project> => {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
};

export const fetchPosts = async (): Promise<Post[]> => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
};

export const fetchUserProfiles = async (): Promise<UserProfile[]> => {
    const response = await axios.get(`${API_URL}/userProfiles`);
    return response.data;
};

export const fetchTopics = async (): Promise<Topic[]> => {
    const response = await axios.get(`${API_URL}/topics`);
    return response.data;
};

export const fetchConversations = async (): Promise<Chat[]> => {
    const response = await axios.get(`${API_URL}/conversations`);
    return response.data;
};

export async function postLogin(email: string, password: string): Promise<unknown> {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
}