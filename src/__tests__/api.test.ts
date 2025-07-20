import { searchItems } from '../services/api';

global.fetch = jest.fn();

it('zwraca dane przy sukcesie', async () => {
  (global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: async () => ({ results: [{ name: 'pikachu', url: 'url1' }] }),
  });
  const data = await searchItems();
  expect(data).toEqual([{ name: 'pikachu', url: 'url1' }]);
});

it('rzuca błąd przy nieudanym fetchu', async () => {
  (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('API error'));
  await expect(searchItems()).rejects.toThrow('API error');
});
