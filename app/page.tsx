"use client";

import PostsFeed from "@/components/posts-feed";
import { useAppSelector } from "@/store/hooks";
import { Loader } from "lucide-react";

export default function Home() {
  const { posts, loading, error } = useAppSelector((state) => state.blog);
  return (
    <>
      <div className="mb-8">
        <h2 className="mb-2 font-bold text-gray-800 dark:text-gray-200 text-2xl">
          Recent Posts
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Explore the latest thoughts and ideas
        </p>
      </div>
      {/* Display posts */}
      {/* Loading */}
      {loading && (
        <div className="flex justify-center items-center w-full h-full">
          <Loader className="text-violet-600 dark:text-violet-400 animate-spin" />
        </div>
      )}
      {error && <p>Error: {error}</p>}
      <PostsFeed posts={posts} />
    </>
  );
}
