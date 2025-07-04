"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Zap,
  Globe,
  Code,
  Shield,
} from "lucide-react";
import { posts } from "@/data/post";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const iconMap = {
  zap: Zap,
  globe: Globe,
  code: Code,
  shield: Shield,
};

export default function HomePage() {

  const post = posts[0]; 
  const [welcomeMessage, setWelcomeMessage] = useState("");

  useEffect(() => {
    const fetchWelcome = async () => {
      const res = await fetch("/api/welcome");
      const data = await res.json();
      setWelcomeMessage(data.message);
    };

    fetchWelcome();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-300 mb-6 leading-tight">
              {welcomeMessage}
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {post.heroDescription}
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-200 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="pb-10">
        <div className="container mx-auto px-4">
          <article className="prose prose-invert prose-lg">
            <div className="bg-gray-200 p-10 rounded-2xl text-xl text-gray-800">
              {post.intro.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="my-16">
              <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-12">
                {post.features.map((feature, idx) => {
                  const Icon = iconMap[feature.icon];
                  return (
                    <div key={idx} className="flex items-start space-x-4 bg-gray-50 rounded-2xl p-6">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gray-200 p-2`}>
                        <Icon className={`w-5 h-5 text-purple-600 `} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-500">
                          {feature.title}
                        </h3>
                        <p className={`text-blue-400`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-400 to-gray-400 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-600 mb-6">
                The App Router Revolution
              </h2>
              <ul className="list-disc list-inside text-gray-100 space-y-2">
                {post.appRouterPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-200 mb-6">
                Getting Started
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                {post.getStart}
              </p>
              <div className="bg-gray-900 rounded-lg p-4 my-6">
                <code className="text-green-400 font-mono text-sm">
                  {post.codeExample}
                </code>
              </div>
              {post.start.map((para, idx) => (
                <p key={idx} className="text-gray-300">
                  {para}
                </p>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              {post.performance.map((item, idx) => (
                <div key={idx} className="text-center bg-gray-100 p-6 rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-gray-800 text-3xl flex items-center justify-center mx-auto mb-4">
                    {item.emoji}
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-500">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Why Choose Next.js?</h2>
              {post.conclusion.map((para, idx) => (
                <p key={idx} className="text-gray-300 mb-4">
                  {para}
                </p>
              ))}

              <Link href="https://nextjs.org/">
              <button className="bg-white flex py-2 px-4 cursor-pointer rounded items-center text-gray-900 hover:bg-gray-100 mt-4">
                Start Building with Next.js
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
