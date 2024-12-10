import { get, post } from '../src/axiosInstance';

describe('JSONPlaceholder API Tests', () => {
  test('GET /posts should return 100 posts', async () => {
    const response = await get('/posts');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBe(100);
  });

  test('GET /posts/1 should return a single post', async () => {
    const response = await get('/posts/1');
    expect(response.status).toBe(200);
    expect(response.data).toMatchObject({
      userId: expect.any(Number),
      id: 1,
      title: expect.any(String),
      body: expect.any(String),
    });
  });

  test('POST /posts should create a new post', async () => {
    const newPost = { title: 'foo', body: 'bar', userId: 1 };
    const response = await post('/posts', newPost);
    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newPost);
  });

  test('GET /users should return 10 users', async () => {
    const response = await get('/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBe(10);
  });

  test('POST /comments should create a new comment', async () => {
    const newComment = { postId: 1, name: 'test', email: 'test@example.com', body: 'Nice post!' };
    const response = await post('/comments', newComment);
    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newComment);
  });
});

