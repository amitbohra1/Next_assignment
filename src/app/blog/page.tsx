import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Calendar } from "lucide-react";
import Link from "next/link";

interface Author {
  name: string;
  avatar: string;
  initials: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  authors: Author[];
  features?: string[];
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Next.js 15.3",
    excerpt:
      "Next.js 15.3 includes Turbopack for builds, new client instrumentation and navigation hooks, and more:",
    date: "April 9th, 2025",
    authors: [
      {
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JD",
      },
      {
        name: "Jane Smith",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JS",
      },
    ],
    features: [
      "Turbopack for builds (alpha)",
      "Community support for Rspack (experimental)",
      "Client Instrumentation hook",
      "Navigation hooks",
      "TypeScript plugin improvements",
    ],
    slug: "nextjs-15-3",
  },
  {
    id: "2",
    title: "Building APIs with Next.js",
    excerpt:
      "This guide will cover how you can build APIs with Next.js, including setting up your project, understanding the App Router and Route Handlers, handling multiple HTTP methods, implementing dynamic routing, creating reusable middleware logic, and deciding when to spin up a dedicated API layer.",
    date: "February 28th, 2025",
    authors: [
      {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "AJ",
      },
    ],
    slug: "building-apis-nextjs",
  },
  {
    id: "3",
    title: "Next.js 15.2",
    excerpt:
      "Next.js 15.2 includes updates for debugging errors, metadata, Turbopack, and more:",
    date: "February 26th, 2025",
    authors: [
      {
        name: "Sarah Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SW",
      },
      {
        name: "Mike Brown",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MB",
      },
    ],
    features: [
      "Redesigned error UI and improved stack traces",
      "Streaming metadata",
      "Turbopack performance improvements",
      "React View Transitions (experimental)",
      "Node.js Middleware (experimental)",
    ],
    slug: "nextjs-15-2",
  },
  {
    id: "4",
    title: "Composable Caching with Next.js",
    excerpt:
      "We’re working on a simple and powerful caching model for Next.js. In a previous post, we talked about our journey with caching and how we’ve arrived at the 'use cache' directive.",
    date: "January 3rd, 2025",
    authors: [
      {
        name: "David Lee",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "DL",
      },
    ],
    slug: "composable-caching-nextjs",
  },
  {
    id: "5",
    title: "Next.js 15.1",
    excerpt:
      "Next.js 15.1 introduces core upgrades, new APIs, and improvements to the developer experience including:",
    date: "December 10th, 2024",
    authors: [
      {
        name: "Emma Davis",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "ED",
      },
      {
        name: "Tom Garcia",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "TG",
      },
    ],
    slug: "nextjs-15-1",
  },
  {
    id: "6",
    title: "Our Journey with Caching",
    excerpt:
      "Frontend performance can be hard to get right. Even in highly optimized apps, the most common culprit by far is client-server waterfalls. When introducing Next.js App Router, we knew we wanted to solve this issue. To do that, we needed to move client-server REST fetches to the server using React Server Components in a single roundtrip. This meant the server had to sometimes be dynamic, sacrificing the great initial loading performance of Jamstack. We built partial prerendering to solve this tradeoff and have the best of both worlds.",
    date: "October 24th, 2024",
    authors: [
      {
        name: "Lisa Chen",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "LC",
      },
    ],
    slug: "journey-with-caching",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          The latest Next.js news
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors p-6 rounded-xl"
            >
              <header className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  {post.title}
                </h2>
              </header>

              <div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {post.features && (
                  <ul className="space-y-2 mb-4">
                    {post.features.map((feature, index) => (
                      <li key={index} className="text-sm">
                        <span className="text-blue-400 hover:text-blue-300 cursor-pointer">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="mt-auto pt-4">
                <Link href="https://nextjs.org/blog/next-15-3">
                  <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-2 cursor-pointer rounded-lg border border-gray-700">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
