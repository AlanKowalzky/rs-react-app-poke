import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();
  const { selectedIds } = useSelector((state) => state.selectedItems);

  return (
    <div>
      <h3>Lista elementów</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {MOCK_ITEMS.map((item) => (
          <li key={item.id}>
            <label>
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
