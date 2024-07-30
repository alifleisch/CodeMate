import { Topic } from '@/types';

export const mockTopics: Topic[] = [
    {
        id: 1,
        title: "JavaScript",
        description: "Discuss the latest trends and updates in JavaScript.",
        comments: [
            { id: 1, author: "Dimi", content: "JavaScript ES2023 has some cool new features!", owner: "Dimi", timestamp: "2023-01-01" },
            { id: 2, author: "Alice", content: "I love using async/await in my projects.", owner: "Alice", timestamp: "2023-01-02" },
        ],
    },
    {
        id: 2,
        title: "Frontend",
        description: "React, Vue, Angular... Let's talk about frontend frameworks.",
        comments: [
            { id: 1, author: "Karl", content: "React is great for building dynamic UIs.", owner: "Karl", timestamp: "2023-01-03" },
            { id: 2, author: "Max", content: "I prefer Vue for its simplicity.", owner: "Max", timestamp: "2023-01-04" },
        ],
    },
    {
        id: 3,
        title: "Backend",
        description: "Discuss Node.js, Django, Ruby on Rails, and other backend technologies.",
        comments: [
            { id: 1, author: "Jane", content: "Node.js is my go-to for backend development.", owner: "Lane", timestamp: "2023-01-05" },
            { id: 2, author: "John", content: "I've been enjoying working with Django recently.", owner: "John", timestamp: "2023-01-06" },
        ],
    },
    {
        id: 4,
        title: "Mobile Development",
        description: "Discuss mobile development frameworks like Flutter, React Native, and Swift.",
        comments: [
            { id: 1, author: "Shifu", content: "Flutter's hot reload feature is a game-changer.", owner: "Shifu", timestamp: "2023-01-07" },
            { id: 2, author: "Chris", content: "React Native allows for great cross-platform development.", owner: "Chris", timestamp: "2023-01-08" },
        ],
    },
    {
        id: 5,
        title: "DevOps",
        description: "Share your thoughts on CI/CD, Docker, Kubernetes, and other DevOps tools.",
        comments: [
            { id: 1, author: "User9", content: "Kubernetes makes scaling applications easy.", owner: "User9", timestamp: "2023-01-09" },
            { id: 2, author: "User10", content: "CI/CD pipelines have improved our deployment process.", owner: "User10", timestamp: "2023-01-10" },
        ],
    },
    {
        id: 6,
        title: "AI and Machine Learning",
        description: "Discuss AI models, machine learning algorithms, and data science projects.",
        comments: [
            { id: 1, author: "User11", content: "Transformers have revolutionized NLP.", owner: "User11", timestamp: "2023-01-11" },
            { id: 2, author: "User12", content: "I enjoy working with TensorFlow for my ML projects.", owner: "User12", timestamp: "2023-01-12" },
        ],
    },
    {
        id: 7,
        title: "Cybersecurity",
        description: "Talk about the latest in cybersecurity, ethical hacking, and data protection.",
        comments: [
            { id: 1, author: "User13", content: "Penetration testing is crucial for securing applications.", owner: "User13", timestamp: "2023-01-13" },
            { id: 2, author: "User14", content: "Keeping software updated is a basic but essential security measure.", owner: "User14", timestamp: "2023-01-14" },
        ],
    },
    {
        id: 8,
        title: "Cloud Computing",
        description: "Discuss AWS, Azure, Google Cloud, and other cloud computing services.",
        comments: [
            { id: 1, author: "User15", content: "AWS Lambda simplifies running code in the cloud.", owner: "User15", timestamp: "2023-01-15" },
            { id: 2, author: "User16", content: "Azure's integration with Microsoft services is excellent.", owner: "User16", timestamp: "2023-01-16" },
        ],
    },
    {
        id: 9,
        title: "Database Management",
        description: "Share knowledge about SQL, NoSQL, database optimization, and management.",
        comments: [
            { id: 1, author: "User17", content: "I love the flexibility of MongoDB for NoSQL databases.", owner: "User17", timestamp: "2023-01-17" },
            { id: 2, author: "User18", content: "SQL joins are powerful but can be complex.", owner: "User18", timestamp: "2023-01-18" },
        ],
    },
    {
        id: 10,
        title: "UI/UX Design",
        description: "Discuss user interface and user experience design principles and tools.",
        comments: [
            { id: 1, author: "User19", content: "Figma is a fantastic tool for UI/UX design.", owner: "User19", timestamp: "2023-01-19" },
            { id: 2, author: "User20", content: "Good UX can significantly improve user satisfaction.", owner: "User20", timestamp: "2023-01-20" },
        ],
    }
];