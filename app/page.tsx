"use client";

import PostsFeed from "@/components/common/posts-feed";
import { useAppSelector } from "@/store/hooks";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { posts, loading, error } = useAppSelector((state) => state.blog);
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-8 w-full">
        <div className="flex-1">
          <h2 className="mb-2 font-bold text-gray-800 dark:text-gray-200 text-2xl">
            Recent Posts
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore the latest thoughts and ideas
          </p>
        </div>
        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center mb-4 h-full">
            <Loader2
              className="text-violet-600 dark:text-violet-400 animate-spin"
              size={40}
            />
          </div>
        )}
      </div>
      {/* Error */}
      {error && <p>Error: {error}</p>}
      {/* Posts */}
      <PostsFeed posts={posts} />
    </>
  );
}
