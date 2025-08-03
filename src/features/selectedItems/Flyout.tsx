import React, { useRef, useState, useEffect } from 'react';
import { unselectAll } from './selectedItemsSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Pokemon } from '../items/itemsSlice';

// Funkcja pomocnicza do generowania treści CSV - teraz jest to funkcja czysta.
const generateCSV = (selectedItems: Pokemon[]): string => {
  const headers: (keyof Omit<Pokemon, 'id'>)[] = ['name', 'url'];
  const csvRows = [
    headers.join(','), // Nagłówek
    ...selectedItems.map((item) =>
      headers.map((header) => `"${item[header]}"`).join(',')
    ),
  ];
  return csvRows.join('\n');
};

export function Flyout() {
  const dispatch = useAppDispatch();
  const allItems = useAppSelector((state) => state.items.items);
  const { selectedIds } = useAppSelector((state) => state.selectedItems);

  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  const itemsToDownload = allItems.filter((item) =>
    selectedIds.includes(item.id)
  );

  useEffect(() => {
    if (downloadUrl && downloadLinkRef.current) {
      downloadLinkRef.current.click();
      // Zwolnienie zasobów po kliknięciu
      URL.revokeObjectURL(downloadUrl);
      setDownloadUrl(null);
    }
  }, [downloadUrl]);

  if (selectedIds.length === 0) {
    return null;
  }

  const handleDownload = () => {
    const csvData = generateCSV(itemsToDownload);
    const blob = new Blob([csvData], {
      type: 'text/csv;charset=utf-8;',
    });
    setDownloadUrl(URL.createObjectURL(blob));
  };

  return (
    <div className="fixed top-4 right-4 bg-background-secondary p-3 rounded-lg shadow-lg border border-border text-text-primary z-50">
      <div className="text-sm mb-2">
        {selectedIds.length}{' '}
        {selectedIds.length === 1 ? 'zaznaczony' : 'zaznaczone'}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(unselectAll())}
          className="px-3 py-1 text-xs rounded bg-gray-600 text-white hover:bg-gray-500 transition-colors"
        >
          Odznacz
        </button>
        <button
          onClick={handleDownload}
          className="px-3 py-1 text-xs rounded bg-pokemon-orange text-white hover:bg-orange-500 transition-colors"
        >
          Pobierz
        </button>
        <a
          ref={downloadLinkRef}
          href={downloadUrl || ''}
          download={`${itemsToDownload.length}_items.csv`}
          className="hidden"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
