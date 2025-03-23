"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import InputTags from "@/components/ui/input-tags";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import createPostSchema from "@/schema/createPostSchema";
import { addPost } from "@/store/blogSlice";
import { useAppDispatch } from "@/store/hooks";
import { UploadButton } from "@/utils/uploadthing";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipboardPaste } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { toast } from "sonner";
import { z } from "zod";

const CreatePostForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof createPostSchema>>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      author: "",
      tags: [],
      imageUrl: "",
      excerpt: "",
      content: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof createPostSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast(`Created post: ${values.title}`);
    dispatch(addPost({ ...values }));
    router.push("/");
  }

  // Handle upload
  function handleUploadImageComplete(url: string) {
    form.setValue("imageUrl", url);
  }
  async function handlePasteImageUrl(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const text = await navigator.clipboard.readText();
    form.setValue("imageUrl", text);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        {/* Author */}
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Tags */}
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <InputTags {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Image URL */}
        <div className="flex sm:flex-row-reverse flex-col justify-center sm:items-center gap-2 sm:gap-4 w-full">
          <div className="relative flex-1">
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <div className="flex flex-wrap flex-1 items-center gap-1 mt-1">
                      <Input {...field} className="flex-1 min-w-20" />

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="icon"
                              variant={"ghost"}
                              onClick={handlePasteImageUrl}
                            >
                              <ClipboardPaste />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Paste image URL</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <span className="sm:mt-6 text-muted-foreground text-center select-none">
            or
          </span>
          <UploadButton
            endpoint="imageUploader"
            appearance={{
              container: "flex-col-reverse flex",
              allowedContent: "",
              button:
                "!h-9 inline-flex justify-center items-center gap-2 disabled:opacity-50 aria-invalid:border-destructive focus-visible:border-ring rounded-md outline-none aria-invalid:ring-destructive/20 focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 font-medium text-sm whitespace-nowrap transition-all cursor-pointer [&_svg]:pointer-events-none disabled:pointer-events-none shrink-0 [&_svg]:shrink-0 px-4 md:px-6 text-sm w-full sm:w-auto py-1 has-[>svg]:px-3",
            }}
            onClientUploadComplete={(res) => {
              const url = res[0].ufsUrl;
              handleUploadImageComplete(url);
              toast(`Uploaded 1 image: ${res[0].name}`);
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
        {/* Excerpt */}
        <FormField
          control={form.control}
          name="excerpt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Excerpt</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Content */}
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <TextareaAutosize
                  {...field}
                  minRows={3}
                  className={cn(
                    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-transparent border-input flex w-full min-w-0 rounded-md border bg-background px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                    "resize-none"
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CreatePostForm;
