import PostPage from "@/components/common/post-page";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PostPage id={id} />;
}
