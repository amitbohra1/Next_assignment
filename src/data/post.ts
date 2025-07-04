import { BlogPost } from "@/types/blog-post";

export const posts: BlogPost[] = [
  {
    author: "John Developer",
    date: "January 2, 2025",
    readTime: "8 min read",
    heroDescription:
      "Discover why Next.js has become the go-to framework for building modern web applications, from startups to enterprise companies worldwide.",
    intro: [
      "Next.js is a powerful React framework that enables developers to build full-stack web applications with ease. Created by Vercel, it provides a robust set of features out of the box, including server-side rendering, static site generation, and API routes, making it the perfect choice for modern web development.",
      "Whether you're building a simple blog, a complex e-commerce platform, or an enterprise application, Next.js provides the tools and optimizations needed to create fast, scalable, and SEO-friendly web applications.",
    ],
    features: [
      {
        title: "Server-Side Rendering",
        description:
          "Pre-render pages on the server for better SEO and faster initial page loads, improving user experience and search engine rankings.",
        icon: "zap",
      },
      {
        title: "Static Site Generation",
        description:
          "Generate static HTML at build time for maximum performance and scalability, perfect for blogs, documentation, and marketing sites.",
        icon: "globe"
      },
      {
        title: "API Routes",
        description:
          "Build full-stack applications with built-in API routes, eliminating the need for a separate backend server for many use cases.",
        icon: "code",
      },
      {
        title: "Built-in Optimizations",
        description:
          "Automatic code splitting, image optimization, and performance enhancements ensure your application loads fast and runs smoothly.",
        icon: "shield"
      },
    ],
    appRouterPoints: [
      "Nested Layouts: Create reusable layouts that persist across route changes",
      "Server Components: Render components on the server for better performance",
      "Streaming: Stream UI updates as they become ready",
      "Suspense Integration: Built-in loading states and error boundaries",
    ],
    getStart: [
      `Creating a new Next.js application is incredibly simple. With
                just one command, you can have a fully configured React 
                application ready for development:`,
    ],
    codeExample:
      "npx create-next-app@latest my-app --typescript --tailwind --eslint",
    start: [
      `This command creates a new Next.js project with TypeScript, Tailwind CSS, and ESLint pre-configured, giving you a solid foundation to build upon.`,
    ],
    performance: [
      {
        title: "Automatic Code Splitting",
        emoji: "⚡",
        description: "Only load the code needed for each page",
      },
      {
        title: "Image Optimization",
        emoji: "🖼️",
        description: "Automatic image resizing and format optimization",
      },
      {
        title: "Edge Runtime",
        emoji: "🚀",
        description: "Deploy functions closer to your users",
      },
    ],
    conclusion: [
      "Next.js has established itself as the leading React framework for good reason. It combines the flexibility of React with powerful built-in features that solve common web development challenges. From small personal projects to large-scale enterprise applications, Next.js provides the tools and optimizations needed to succeed.",
      "Whether you're a beginner looking to learn modern web development or an experienced developer seeking to build production-ready applications, Next.js offers an excellent developer experience and outstanding performance out of the box.",
    ],
  },
];
