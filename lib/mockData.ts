import { BlogPost } from "@/store/blogSlice";

export const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    content:
      "Next.js is a React framework that enables server-side rendering and static site generation. It's a powerful tool for building modern web applications. In this post, we'll cover the basics of setting up a Next.js project and explore its key features. Next.js makes it easy to create React applications by handling the tooling and configuration needed for React. It also provides additional structure, features, and optimizations for your application.",
    excerpt:
      "Learn the basics of setting up a Next.js project and explore its key features.",
    author: "Alex Johnson",
    date: "2025-03-10T08:00:00Z",
    imageUrl: "https://picsum.photos/id/1/800/500",
    tags: ["React", "Next.js", "Frontend"],
  },
  {
    id: "2",
    title: "CSS Grid vs Flexbox",
    content:
      "When it comes to layout in CSS, Grid and Flexbox are two powerful systems that solve different problems. Flexbox is designed for one-dimensional layouts (either rows OR columns), while Grid is designed for two-dimensional layouts (rows AND columns). Understanding when to use each can significantly improve your development workflow and the structure of your applications.",
    excerpt:
      "Understanding when to use CSS Grid vs Flexbox for optimal layouts.",
    author: "Samantha Williams",
    date: "2025-03-05T10:30:00Z",
    imageUrl: "https://picsum.photos/id/21/800/600",
    tags: ["CSS", "Web Design", "Frontend"],
  },
  {
    id: "3",
    title: "TypeScript Best Practices",
    content:
      "TypeScript adds static typing to JavaScript, improving developer experience and code quality. In this comprehensive guide, we'll explore TypeScript best practices including: proper type annotations, using interfaces and types effectively, leveraging generics, and setting up optimal compiler options. Following these guidelines will help you write more maintainable and error-free code.",
    excerpt: "A comprehensive guide to writing better TypeScript code.",
    author: "Michael Chen",
    date: "2025-02-28T14:15:00Z",
    imageUrl: "https://picsum.photos/id/3/800/400",
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
  {
    id: "4",
    title: "Introduction to React Hooks",
    content:
      "React Hooks have revolutionized how we write React components. With Hooks, we can use state and other React features without writing a class. This makes our code more concise and easier to understand. In this post, we'll cover useState, useEffect, useContext, and custom hooks.",
    excerpt:
      "Learn how to use React Hooks to write more concise and readable components.",
    author: "Emily Parker",
    date: "2025-02-20T09:45:00Z",
    imageUrl: "https://picsum.photos/id/42/800/550",
    tags: ["React", "Hooks", "Frontend"],
  },
  {
    id: "5",
    title: "Building a REST API with Node.js",
    content:
      "Node.js is perfect for building lightweight, scalable REST APIs. In this tutorial, we'll build a complete REST API with Express, including authentication, validation, and database integration. We'll explore middleware, route handling, error management, and performance optimization techniques.",
    excerpt:
      "A step-by-step guide to creating a REST API using Node.js and Express.",
    author: "David Wilson",
    date: "2025-02-15T11:20:00Z",
    imageUrl: "https://picsum.photos/id/5/800/500",
    tags: ["Node.js", "API", "Backend"],
  },
  {
    id: "6",
    title: "Responsive Design Principles",
    content:
      "Creating websites that work well on devices of all sizes is essential in today's multi-device world. This post covers responsive design principles, mobile-first development, media queries, flexible grids, and responsive images. You'll learn practical techniques for ensuring your websites look and function beautifully on everything from smartphones to large desktop monitors.",
    excerpt:
      "Essential techniques for creating websites that work well on all devices.",
    author: "Olivia Martinez",
    date: "2025-02-10T16:00:00Z",
    imageUrl: "https://picsum.photos/id/64/800/450",
    tags: ["CSS", "Responsive Design", "UX"],
  },
  {
    id: "7",
    title: "State Management with Redux",
    content:
      "Managing state in large React applications can be challenging. Redux provides a predictable state container that makes it easier to manage application state, debug, and test your code. This post will guide you through Redux basics, including actions, reducers, the store, and connecting Redux to your React components. We'll also explore middleware options and best practices for organizing your Redux code.",
    excerpt:
      "How to effectively manage application state using Redux in React applications.",
    author: "James Taylor",
    date: "2025-02-05T13:10:00Z",
    imageUrl: "https://picsum.photos/id/7/800/600",
    tags: ["React", "Redux", "State Management"],
  },
  {
    id: "8",
    title: "Optimizing Web Performance",
    content:
      "Web performance is critical for user experience and conversion rates. This guide covers essential optimization techniques including: image optimization, code splitting, lazy loading, caching strategies, and reducing bundle size. Learn how to measure performance with tools like Lighthouse and implement proven strategies to make your websites faster.",
    excerpt: "Techniques and strategies to make your websites load faster.",
    author: "Sophia Lee",
    date: "2025-01-30T09:00:00Z",
    imageUrl: "https://picsum.photos/id/8/800/500",
    tags: ["Performance", "Web Development", "Optimization"],
  },
  {
    id: "9",
    title: "Accessibility in Web Design",
    content:
      "Building accessible websites isn't just about compliance—it's about creating experiences that everyone can use. This article explores practical accessibility techniques, ARIA attributes, keyboard navigation, semantic HTML, and testing tools. Learn how to make your web applications more inclusive while improving overall user experience for everyone.",
    excerpt: "Essential practices for creating inclusive web experiences.",
    author: "Nathan Brown",
    date: "2025-01-25T15:30:00Z",
    imageUrl: "https://picsum.photos/id/91/800/550",
    tags: ["Accessibility", "Web Design", "UX"],
  },
  {
    id: "10",
    title: "Introduction to GraphQL",
    content:
      "GraphQL is a query language for APIs that gives clients the power to ask for exactly what they need. This post introduces GraphQL fundamentals, comparing it with REST, and showing how to build a simple GraphQL server and client. You'll learn about schemas, resolvers, queries, mutations, and how to integrate GraphQL with React applications.",
    excerpt:
      "Understanding the basics of GraphQL and how it differs from REST.",
    author: "Rebecca Johnson",
    date: "2025-01-20T10:45:00Z",
    imageUrl: "https://picsum.photos/id/10/800/500",
    tags: ["GraphQL", "API", "Backend"],
  },
  {
    id: "11",
    title: "CSS Animation Techniques",
    content:
      "CSS animations allow you to create engaging, interactive user experiences without JavaScript. This comprehensive guide covers CSS transitions, keyframe animations, timing functions, and performance considerations. With practical examples, you'll learn how to add subtle motion and delight to your interfaces while maintaining performance and accessibility.",
    excerpt:
      "Learn how to create smooth, performant animations using pure CSS.",
    author: "Tyler Anderson",
    date: "2025-01-15T14:00:00Z",
    imageUrl: "https://picsum.photos/id/11/800/600",
    tags: ["CSS", "Animation", "Frontend"],
  },
  {
    id: "12",
    title: "Testing React Applications",
    content:
      "Testing is essential for maintaining code quality and preventing regressions. This post explores testing strategies for React applications, including unit testing with Jest, component testing with React Testing Library, integration testing, and end-to-end testing with Cypress. You'll learn how to write effective tests, set up a testing workflow, and integrate testing into your development process.",
    excerpt: "Strategies and tools for testing React applications effectively.",
    author: "Jessica Williams",
    date: "2025-01-10T11:15:00Z",
    imageUrl: "https://picsum.photos/id/12/800/450",
    tags: ["React", "Testing", "Jest"],
  },
  {
    id: "13",
    title: "Serverless Architecture",
    content:
      "Serverless computing allows developers to build and run applications without managing infrastructure. This article explores serverless concepts, benefits, limitations, and implementation patterns. You'll learn about FaaS (Function as a Service), serverless frameworks, and how to build serverless applications with AWS Lambda, Azure Functions, or Google Cloud Functions.",
    excerpt:
      "An overview of serverless architecture and its benefits for modern applications.",
    author: "Daniel Kim",
    date: "2025-01-05T16:30:00Z",
    imageUrl: "https://picsum.photos/id/13/800/500",
    tags: ["Serverless", "Cloud", "Architecture"],
  },
  {
    id: "14",
    title: "Modern CSS Features",
    content:
      "CSS has evolved significantly in recent years, with powerful new features that solve common design challenges. This post covers CSS Grid, Custom Properties (variables), Logical Properties, Container Queries, and new color functions. Discover how these modern features can simplify your stylesheets and enable more dynamic, responsive designs with less code.",
    excerpt:
      "Exploring the latest CSS features and how they improve web development.",
    author: "Mia Thompson",
    date: "2024-12-28T09:20:00Z",
    imageUrl: "https://picsum.photos/id/14/800/600",
    tags: ["CSS", "Frontend", "Web Design"],
  },
  {
    id: "15",
    title: "Getting Started with Docker",
    content:
      "Docker simplifies the process of creating, deploying, and running applications using containers. This beginner-friendly guide introduces Docker concepts, explains how to create and manage containers, write Dockerfiles, and use Docker Compose for multi-container applications. Learn how Docker can improve your development workflow and make your applications more portable and scalable.",
    excerpt: "A beginner's guide to containerization with Docker.",
    author: "Ryan Peters",
    date: "2024-12-20T13:45:00Z",
    imageUrl: "https://picsum.photos/id/15/800/500",
    tags: ["Docker", "DevOps", "Containers"],
  },
];
  