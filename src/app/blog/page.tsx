"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

const blogs = [
  {
    slug: "complete-guide-to-mehandi-application",
    title: "Complete Guide to Mehandi Application",
    excerpt:
      "Learn the art of mehandi application from the experts. This guide covers everything from choosing the right mehandi cone to achieving the perfect dark stain.",
    date: "February 15, 2026",
    category: "Guide",
  },
  {
    slug: "complete-guide-to-mehandi-application",
    title: "How to Make Your Mehandi Darker and Long-Lasting",
    excerpt:
      "Professional tips to achieve deep, rich henna color and extend the stain duration naturally.",
    date: "January 5, 2026",
    category: "Tips",
  },
  {
    slug: "complete-guide-to-mehandi-application",
    title: "Arabic vs Traditional Mehandi – Which One Should You Choose?",
    excerpt:
      "Understand the key differences between Arabic and Indian traditional mehandi styles.",
    date: "December 28, 2025",
    category: "Guide",
  },
  {
    slug: "complete-guide-to-mehandi-application",
    title: "Top Bridal Mehandi Designs Trending in 2025",
    excerpt:
      "Discover the latest bridal mehandi design trends for 2025 including Arabic fusion, portrait mehandi, minimal elegance, and heavy royal patterns.",
    date: "December 28, 2025",
    category: "Guide",
  },
];

export default function BlogPage() {
  return (
    <div style={{ backgroundColor: "#3b140f" }} className="min-h-screen">
      <section
        className="py-20 text-center"
        style={{ backgroundColor: "rgba(225,173,61,0.1)" }}
      >
        <h1
          className="text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: "rgb(225,173,61)" }}
        >
          Mehandi Blog & Bridal Guides
        </h1>
        <p className="max-w-3xl mx-auto text-lg" style={{ color: "#fff" }}>
          Expert bridal mehandi inspiration, Arabic henna trends, traditional
          patterns and professional tips from Chennai’s trusted mehandi artists.
        </p>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-12 grid md:grid-cols-2 gap-10">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl shadow-xl"
              style={{
                backgroundColor: "rgba(122,57,22,0.6)",
                border: "1px solid rgb(225,173,61)",
              }}
            >
              <div className="flex justify-between mb-4 text-xs">
                <span
                  className="px-3 py-1 rounded-full font-semibold"
                  style={{
                    backgroundColor: "rgb(225,173,61)",
                    color: "#3b140f",
                  }}
                >
                  {blog.category}
                </span>
                <span
                  className="flex items-center gap-2"
                  style={{ color: "rgb(225,173,61)" }}
                >
                  <CalendarDays className="w-4 h-4" />
                  {blog.date}
                </span>
              </div>

              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "rgb(225,173,61)" }}
              >
                {blog.title}
              </h2>

              <p style={{ color: "#fff" }} className="mb-6">
                {blog.excerpt}
              </p>

              <Link href={`/blog/${blog.slug}`}>
                <span
                  className="flex items-center gap-2 font-semibold cursor-pointer"
                  style={{ color: "rgb(225,173,61)" }}
                >
                  Read Full Article <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
