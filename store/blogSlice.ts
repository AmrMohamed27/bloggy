import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockPosts } from "@/lib/mockData";

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl?: string;
  tags?: string[];
}

interface BlogState {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  posts: mockPosts,
  loading: false,
  error: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Omit<BlogPost, "id" | "date">>) => {
      const newPost: BlogPost = {
        ...action.payload,
        id: (state.posts.length + 1).toString(),
        date: new Date().toISOString(),
      };
      state.posts.unshift(newPost);
    },
    updatePost: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<BlogPost> }>
    ) => {
      const { id, updates } = action.payload;
      const index = state.posts.findIndex((post) => post.id === id);
      if (index !== -1) {
        state.posts[index] = { ...state.posts[index], ...updates };
      }
    },
    deletePost: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.posts = state.posts.filter((post) => post.id !== id);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { addPost, updatePost, deletePost, setLoading, setError } =
  blogSlice.actions;
export default blogSlice.reducer;
