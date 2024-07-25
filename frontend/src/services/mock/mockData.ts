import { Chat } from "../../types";

export const mockUsers = [
    { id: 1, username: 'user1', email: 'user1@example.com' },
    { id: 2, username: 'user2', email: 'user2@example.com' },
];

export const mockProjects = [
    {
        id: 1,
        title: 'Project One',
        description: 'Description for project one',
        owner: 'user1',
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'Description for project two',
        owner: 'user2',
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'Description for project three',
        owner: 'user3',
    },
];

export const mockPosts = [
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

export const mockUserProfiles = [
    {
        id: 1,
        name: "Dimi",
        age: 30,
        skills: ["Angular", "Node.js"],
        level: "Staff",
        picture: "public/dimi.jpg",
    },
    {
        id: 2,
        name: "Alice",
        age: 25,
        skills: ["React", "Java"],
        level: "Middle",
        picture: "public/alice.jpg",
    },
    {
        id: 3,
        name: "Karl",
        age: 18,
        skills: ["Python", "Django"],
        level: "Junior",
        picture: "public/karl.jpg",
    },
];

export const mockConversations: { [key: number]: Chat } = {
    1: {
        id: 1,
        user: { id: 1, name: 'Dimi', picture: 'public/dimi.jpg' },
        messages: [
            'Hey there!',
            'You: Hello!',
            'How\'s it going?',
            'You: Great, thanks!',
            'Awesome! What are you up for this week?'
        ],
    },
    2: {
        id: 2,
        user: { id: 2, name: 'Alice', picture: 'public/alice.jpg' },
        messages: [
            'Hi! What\'s up?',
            'You: Not much, just working on some projects.',
            'Cool! Let\'s catch up soon.',
            'You: Definitely, looking forward to it!',
            'Great, talk to you later!'
        ],
    },
    3: {
        id: 3,
        user: { id: 3, name: 'Karl', picture: 'public/karl.jpg' },
        messages: [
            'Hello! How are you?',
            'You: I\'m good, thanks for asking.',
            'That\'s great to hear!',
            'You: What about you?',
            'I\'m doing well, just busy with studies.'
        ],
    }
};