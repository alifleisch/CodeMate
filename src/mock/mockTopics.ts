import { Topic } from '../types';

export const mockTopics: Topic[] = [
    {
        id: 1,
        title: "Latest in JavaScript",
        description: "Discuss the latest trends and updates in JavaScript.",
        posts: [
            { id: 1, author: "User1", content: "JavaScript ES2023 has some cool new features!", owner: "User1", timestamp: "2023-01-01" },
            { id: 2, author: "User2", content: "I love using async/await in my projects.", owner: "User2", timestamp: "2023-01-02" },
        ],
    },
    {
        id: 2,
        title: "Frontend Frameworks",
        description: "React, Vue, Angular... Let's talk about frontend frameworks.",
        posts: [
            { id: 1, author: "User3", content: "React is great for building dynamic UIs.", owner: "User3", timestamp: "2023-01-03" },
            { id: 2, author: "User4", content: "I prefer Vue for its simplicity.", owner: "User4", timestamp: "2023-01-04" },
        ],
    },
    {
        id: 3,
        title: "Backend Technologies",
        description: "Discuss Node.js, Django, Ruby on Rails, and other backend technologies.",
        posts: [
            { id: 1, author: "User5", content: "Node.js is my go-to for backend development.", owner: "User5", timestamp: "2023-01-05" },
            { id: 2, author: "User6", content: "I've been enjoying working with Django recently.", owner: "User6", timestamp: "2023-01-06" },
        ],
    },
];