import { getPosts, createPost, updatePost, deletePost } from '../controllers/apiControllers';

describe('API Tests', () => {
  test('GET - return a list of posts', async () => {
    const response = await getPosts();
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test('POST - create a new post', async () => {
    const newPost = {
      title: 'new post',
      body: 'post for api call',
      userId: 77,
    };

    const response = await createPost(newPost);
    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newPost);
  });

  test('PUT - update the post', async () => {
    const updatedPost = {
      id: 1,
      title: 'updated post',
      body: 'PUT method - updated post',
      userId: 1,
    };

    const response = await updatePost(1, updatedPost);
    expect(response.status).toBe(200);
    expect(response.data).toMatchObject(updatedPost);
  });

  test('DELETE - delete the post', async () => {
    const response = await deletePost(1);
    expect(response.status).toBe(200);
  });
});
