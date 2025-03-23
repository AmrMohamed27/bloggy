import { z } from "zod";

const createPostSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be 100 characters or less"),
  content: z.string().min(1, "Content is required"),
  excerpt: z
    .string()
    .min(1, "Excerpt is required")
    .max(100, "Excerpt must be 100 characters or less"),
  author: z.string().min(1, "Author is required"),
  imageUrl: z.string().url("Invalid image URL"),
  tags: z
    .array(z.string())
    .min(1, "At least one tag is required")
    .max(3, "No more than 3 tags"),
});

export default createPostSchema;
