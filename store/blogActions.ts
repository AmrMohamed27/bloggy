import { createAsyncThunk } from "@reduxjs/toolkit";
import { BlogPost } from "./blogSlice";
import {
  setLoading,
  setError,
  addPost,
  updatePost,
  deletePost,
} from "./blogSlice";

// Thunk for creating a post
export const createPostAsync = createAsyncThunk(
  "blog/createPost",
  async (post: Omit<BlogPost, "id" | "date">, { dispatch }) => {
    try {
      dispatch(setLoading(true));

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      dispatch(addPost(post));
      dispatch(setLoading(false));

      return null;
    } catch (error) {
      dispatch(
        setError(error instanceof Error ? error.message : "Unknown error")
      );
      dispatch(setLoading(false));
    }
  }
);

// Thunk for updating a post
export const updatePostAsync = createAsyncThunk(
  "blog/updatePost",
  async (
    { id, updates }: { id: string; updates: Partial<BlogPost> },
    { dispatch }
  ) => {
    try {
      dispatch(setLoading(true));

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      dispatch(updatePost({ id, updates }));
      dispatch(setLoading(false));

      return null;
    } catch (error) {
      dispatch(
        setError(error instanceof Error ? error.message : "Unknown error")
      );
      dispatch(setLoading(false));
      throw error;
    }
  }
);

// Thunk for deleting a post
export const deletePostAsync = createAsyncThunk(
  "blog/deletePost",
  async (id: string, { dispatch }) => {
    try {
      dispatch(setLoading(true));

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      dispatch(deletePost(id));
      dispatch(setLoading(false));

      return null;
    } catch (error) {
      dispatch(
        setError(error instanceof Error ? error.message : "Unknown error")
      );
      dispatch(setLoading(false));
      throw error;
    }
  }
);
