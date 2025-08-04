import { searchItems } from '../services/api';

global.fetch = jest.fn();

it('returns data on success', async () => {
  (fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: async () => ({ results: [{ name: 'pikachu', url: 'url1' }] }),
  });
  const data = await searchItems();
  expect(data).toEqual({ results: [{ name: 'pikachu', url: 'url1' }] });
});

it('throws error on failed fetch', async () => {
  (fetch as jest.Mock).mockResolvedValueOnce({
    ok: false,
    status: 500,
    statusText: 'Server Error',
  });
  await expect(searchItems()).rejects.toThrow(
    'API request failed with status 500: Server Error'
  );
});
