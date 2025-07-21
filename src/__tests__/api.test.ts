import { searchItems } from '../services/api';

global.fetch = jest.fn();

it('returns data on success', async () => {
  (global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: async () => ({ results: [{ name: 'pikachu', url: 'url1' }] }),
  });
  const data = await searchItems();
  expect(data).toEqual([{ name: 'pikachu', url: 'url1' }]);
});

it('throws error on failed fetch', async () => {
  (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('API error'));
  await expect(searchItems()).rejects.toThrow('API error');
});

it('throws error on response ok: false', async () => {
  (global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: false,
    status: 404,
    statusText: 'Not Found',
    json: async () => ({}),
  });
  await expect(searchItems()).rejects.toThrow(
    'API request failed with status 404'
  );
});
