"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn, formatDate } from "@/lib/utils";
import { BlogPost } from "@/store/blogSlice";
import { Edit, MoreVertical, Trash2 } from "lucide-react";
import Image from "next/image";

interface PostCardProps {
  post: BlogPost;
  className?: string;
}

export default function PostCard({ post, className }: PostCardProps) {
  // Destructure post properties
  const { title, excerpt, imageUrl, date, tags, author } = post;
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-lg group",
        "border-violet-100 dark:border-violet-900",
        className
      )}
    >
      {/* Header with Image and Options */}
      <div className="relative">
        {/* Image */}
        <div className="overflow-hidden">
          <Image
            src={imageUrl || "/assets/images/placeholder.webp"}
            alt={title}
            width={600}
            height={400}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* Options Dropdown menu */}
        <div className="top-3 right-3 z-10 absolute">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full w-8 h-8"
              >
                <MoreVertical className="w-4 h-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem className="cursor-pointer">
                <Edit className="mr-2 w-4 h-4" />
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600 dark:text-red-400 cursor-pointer">
                <Trash2 className="mr-2 w-4 h-4" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="bottom-0 left-0 absolute bg-gradient-to-t from-black/70 to-transparent p-3 w-full">
          <div className="flex gap-1">
            {tags &&
              tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white"
                >
                  {tag}
                </Badge>
              ))}
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div>{author}</div>
        <div className="text-gray-500 dark:text-gray-400 text-xs">
          {formatDate(date)}
        </div>
        <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-100 text-xl line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
          {excerpt}
        </p>
      </CardContent>
    </Card>
  );
}
