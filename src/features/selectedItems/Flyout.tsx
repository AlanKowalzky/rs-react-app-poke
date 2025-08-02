import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unselectAll } from './selectedItemsSlice';

// Fikcyjne dane - w realnej aplikacji mogłyby być pobierane z innego miejsca w stanie
const MOCK_ITEMS = [
  {
    id: 1,
    name: 'Element 1',
    description: 'Opis dla elementu 1',
    details_url: '/details/1',
  },
  {
    id: 2,
    name: 'Element 2',
    description: 'Opis dla elementu 2',
    details_url: '/details/2',
  },
  {
    id: 3,
    name: 'Element 3',
    description: 'Opis dla elementu 3',
    details_url: '/details/3',
  },
  {
    id: 4,
    name: 'Element 4',
    description: 'Opis dla elementu 4',
    details_url: '/details/4',
  },
  {
    id: 5,
    name: 'Element 5',
    description: 'Opis dla elementu 5',
    details_url: '/details/5',
  },
];

const downloadCSV = (selectedItems) => {
  const headers = ['name', 'description', 'details_url'];
  const csvRows = [
    headers.join(','), // Nagłówek
    ...selectedItems.map((item) =>
      headers.map((header) => `"${item[header]}"`).join(',')
    ),
  ];

  const blob = new Blob([csvRows.join('\n')], {
    type: 'text/csv;charset=utf-8;',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${selectedItems.length}_items.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export function Flyout() {
  const dispatch = useDispatch();
  const { selectedIds } = useSelector((state) => state.selectedItems);

  if (selectedIds.length === 0) {
    return null;
  }

  const handleDownload = () => {
    const itemsToDownload = MOCK_ITEMS.filter((item) =>
      selectedIds.includes(item.id)
    );
    downloadCSV(itemsToDownload);
  };

  return (
    <div className="flyout">
      <span>
        {selectedIds.length}{' '}
        {selectedIds.length === 1
          ? 'element jest zaznaczony'
          : 'elementy są zaznaczone'}
      </span>
      <div>
        <button onClick={() => dispatch(unselectAll())}>
          Odznacz wszystko
        </button>
        <button onClick={handleDownload}>Pobierz</button>
      </div>
    </div>
  );
}
