import { useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { unselectAll } from './selectedItemsSlice';
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { useGetPokemonListQuery, Pokemon } from '@/services/pokemonApi';

const generateCSV = (selectedItems: Pokemon[]): string => {
  const headers: (keyof Omit<Pokemon, 'id'>)[] = ['name', 'url'];
  const csvRows = [
    headers.join(','),
    ...selectedItems.map((item) =>
      headers.map((header) => `"${item[header]}"`).join(',')
    ),
  ];
  return csvRows.join('\n');
};

export function Flyout() {
  const dispatch = useAppDispatch();
  const t = useTranslations('Flyout');
  const { data: allItems = [] } = useGetPokemonListQuery(undefined);
  const { selectedIds } = useAppSelector((state) => state.selectedItems);

  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  const itemsToDownload = allItems.filter((item) =>
    selectedIds.includes(item.id)
  );

  useEffect(() => {
    if (downloadUrl && downloadLinkRef.current) {
      downloadLinkRef.current.click();
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
        {t('selectedCount', { count: selectedIds.length })}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(unselectAll())}
          className="px-3 py-1 text-xs rounded bg-gray-600 text-white hover:bg-gray-500 transition-colors"
        >
          {t('unselect')}
        </button>
        <button
          onClick={handleDownload}
          className="px-3 py-1 text-xs rounded text-white transition-colors hover:opacity-80"
          style={{ backgroundColor: '#ff7043' }}
        >
          {t('download')}
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
