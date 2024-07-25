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

export const mockConversations = [
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