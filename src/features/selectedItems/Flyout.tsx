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
    <div className="flyout">
      <span>
        {selectedIds.length}{' '}
        {selectedIds.length === 1
          ? 'element jest zaznaczony'
          : 'elementy są zaznaczone'}
      </span>
      <div>
        <button onClick={() => dispatch(unselectAll())} className="flyout-button">
          Odznacz wszystko
        </button>
        <button onClick={handleDownload} className="flyout-button-primary">
          Pobierz
        </button>
        {/* Ukryty link zarządzany przez React */}
        <a
          ref={downloadLinkRef}
          href={downloadUrl || ''}
          download={`${itemsToDownload.length}_items.csv`}
          style={{ display: 'none' }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
