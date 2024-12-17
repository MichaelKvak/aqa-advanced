import axiosInstance from '../src/axiosInstance';

// Get list of posts
export const getPosts = async () => {
  const response = await axiosInstance.get('/posts');
  return response;
};

// creating a new post
export const createPost = async (newPost) => {
  const response = await axiosInstance.post('/posts', newPost);
  return response;
};

// updating a post
export const updatePost = async (postId, updatedPost) => {
  const response = await axiosInstance.put(`/posts/${postId}`, updatedPost);
  return response;
};

// deleting a post
export const deletePost = async (postId) => {
  const response = await axiosInstance.delete(`/posts/${postId}`);
  return response;
};
