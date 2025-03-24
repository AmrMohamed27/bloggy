"use client";
import { formatDate } from "@/lib/utils";
import { useAppSelector } from "@/store/hooks";
import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";

type Props = {
  id: string;
};

const PostPage = ({ id }: Props) => {
  const post = useAppSelector((state) =>
    state.blog.posts.find((post) => post.id === id)
  );
  if (!post) return <div>Error 404 - Post not found</div>;
  const { author, title, content, imageUrl, tags, date, excerpt } = post;
  return (
    <div className="flex flex-col gap-4">
      {/* Title and info */}
      <div className="flex flex-col gap-2">
        {/* Title */}
        <h1 className="font-bold text-xl md:text-3xl">{title}</h1>
        {/* Author */}
        <span>By: {author}</span>
        {/* Date */}
        <div className="text-gray-500 dark:text-gray-400 text-xs">
          {formatDate(date)}
        </div>
      </div>
      {/* Image */}
      <div className="flex flex-col gap-4 rounded-md overflow-hidden">
        <Image
          src={imageUrl || "/assets/images/placeholder.webp"}
          alt={title}
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
        <p className="prose-invert dark:prose-invert-light not-dark:text-muted-foreground text-sm prose">
          {excerpt}
        </p>
      </div>
      {/* Content */}
      <div className="max-w-none text-foreground text-lg prose">{content}</div>
      {/* Tags */}
      <div className="flex flex-row items-center gap-2 mt-4">
        <span>Tags: </span>
        <div className="flex gap-1">
          {tags &&
            tags.map((tag) => (
              <Badge key={tag} className="">
                {tag}
              </Badge>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
