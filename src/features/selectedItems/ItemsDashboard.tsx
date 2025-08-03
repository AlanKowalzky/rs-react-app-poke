import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { toggleItem } from './selectedItemsSlice';

// Fikcyjne dane - w realnej aplikacji mogłyby być pobierane z innego miejsca w stanie
const MOCK_ITEMS = [
  { id: 1, name: 'Element 1', description: 'Opis dla elementu 1' },
  { id: 2, name: 'Element 2', description: 'Opis dla elementu 2' },
  { id: 3, name: 'Element 3', description: 'Opis dla elementu 3' },
  { id: 4, name: 'Element 4', description: 'Opis dla elementu 4' },
  { id: 5, name: 'Element 5', description: 'Opis dla elementu 5' },
];

export function ItemsDashboard() {
  const dispatch = useAppDispatch();
  const { selectedIds } = useAppSelector((state) => state.selectedItems);

  return (
    <div className="rounded-lg bg-background-secondary p-4">
      <h3 className="mb-4 text-xl font-bold">Lista elementów</h3>
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
