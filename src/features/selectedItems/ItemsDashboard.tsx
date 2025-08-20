import { useAppSelector, useAppDispatch } from '../../hooks';
import { toggleItem } from './selectedItemsSlice';

const MOCK_ITEMS = [
  { id: 1, name: 'Item 1', description: 'Description for item 1' },
  { id: 2, name: 'Item 2', description: 'Description for item 2' },
  { id: 3, name: 'Item 3', description: 'Description for item 3' },
  { id: 4, name: 'Item 4', description: 'Description for item 4' },
  { id: 5, name: 'Item 5', description: 'Description for item 5' },
];

export function ItemsDashboard() {
  const dispatch = useAppDispatch();
  const { selectedIds } = useAppSelector((state) => state.selectedItems);

  return (
    <div className="rounded-lg bg-background-secondary p-4">
      <h3 className="mb-4 text-xl font-bold">Items List</h3>
      <ul className="list-none space-y-2 p-0">
        {MOCK_ITEMS.map((item) => (
          <li key={item.id}>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedIds.includes(item.id)}
                onChange={() => dispatch(toggleItem(item.id))}
              />
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
