"use client";
import CreatePostForm from "@/components/forms/create-post-form";

const Page = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <h1 className="font-bold text-xl md:text-3xl">Create a new post</h1>
      <CreatePostForm />
    </div>
  );
};

export default Page;
