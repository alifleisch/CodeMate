import { Chat } from "../../types";

export const mockUsers = [
    { id: 1, username: 'Dimi', email: 'dimi@example.com' },
    { id: 2, username: 'Alice', email: 'alice@example.com' },
    { id: 3, username: 'Karl', email: 'karl@example.com' },
];

export const mockProjects = [
    {
        id: 1,
        title: 'Project One',
        description: 'Description for project one',
        owner: 'Dimi',
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'Description for project two',
        owner: 'Alice',
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'Description for project three',
        owner: 'Karl',
    },
];

export const mockPosts = [
    {
        id: 1,
        content: "Looking for collaborators on a React app.",
        author: "Dimi",
        owner: "Dimi",
        timestamp: "2024-01-01"
    },
    {
        id: 2,
        content: "Looking for collaborators on a React app.",
        author: "Alice",
        owner: "Alice",
        timestamp: "2024-01-02"
    },
    {
        id: 3,
        content: "Looking for collaborators on a React app.",
        author: "Alice",
        owner: "Alice",
        timestamp: "2024-01-03"
    },
    {
        id: 4,
        content: "Looking for collaborators on a React app.",
        author: "Dimi",
        owner: "Dimi",
        timestamp: "2024-01-04"
    },
    {
        id: 5,
        content: "Looking for collaborators on a React app.",
        author: "Karl",
        owner: "Karl",
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
        picture: "public/Dimi.jpg",
    },
    {
        id: 2,
        name: "Alice",
        age: 25,
        skills: ["React", "Java"],
        level: "Middle",
        picture: "public/Alice.jpg",
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
        user: { id: 1, name: 'Dimi', picture: 'public/Dimi.jpg' },
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
        user: { id: 2, name: 'Alice', picture: 'public/Alice.jpg' },
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