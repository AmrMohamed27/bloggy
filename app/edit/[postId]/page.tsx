import EditPostForm from "@/components/forms/edit-post-form";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  return (
    <div className="flex flex-col gap-6 w-full">
      <h1 className="font-bold text-xl md:text-3xl">Edit post</h1>
      <EditPostForm postId={postId} />
    </div>
  );
}
