import { useAppSelector } from "@/store/hooks";
import React from "react";
import MasonryGrid from "./masonry-grid";
import PostCard from "./post-card";
import InfiniteScrollLayout from "./infinite-scroll-layout";
import { BlogPost } from "@/store/blogSlice";

interface Props {
  posts: BlogPost[];
}

const PostsFeed = ({ posts }: Props) => {
  const layoutType = useAppSelector((state) => state.layoutState.layout);
  return layoutType === "masonry" ? (
    <MasonryGrid>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </MasonryGrid>
  ) : (
    <InfiniteScrollLayout>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </InfiniteScrollLayout>
  );
};

export default PostsFeed;
