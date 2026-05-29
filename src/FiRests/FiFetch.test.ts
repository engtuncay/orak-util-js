import { describe, it, expect } from 'vitest';
import { FiFetch } from './FiFetch';

const TEST_URL = 'https://jsonplaceholder.typicode.com/posts';

describe('FiFetch', () => {
  it('postToJson gerçek endpoint ile çalışır', async () => {
    const postData = { title: 'foo', body: 'bar', userId: 1 };
    const result = await FiFetch.postToJson(TEST_URL, postData);
    expect(result).toHaveProperty('id');
    expect(result.title).toBe('foo');
    expect(result.body).toBe('bar');
    expect(result.userId).toBe(1);
    console.log('test end');
  });

  it('postToResponse gerçek endpoint ile çalışır', async () => {
    const postData = { title: 'foo', body: 'bar', userId: 1 };
    const response = await FiFetch.postToResponse(TEST_URL, postData);
    expect(response.ok).toBe(true);
    const json = await response.json();
    expect(json).toHaveProperty('id');
    expect(json.title).toBe('foo');
    expect(json.body).toBe('bar');
    expect(json.userId).toBe(1);
  });
});

