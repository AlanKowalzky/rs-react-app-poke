'use client'; // <-- To jest kluczowa zmiana!

import React, { useState, useMemo } from 'react';
import { useGetPokemonListQuery, Pokemon } from '@/services/pokemonApi';
import Search from '@/components/Search';
import CardList from '@/components/CardList';
import Loader from '@/components/Loader';
import Pagination from '@/components/Pagination';
import { Flyout } from '@/features/selectedItems/Flyout';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  // Logika pobierania danych z RTK Query
  const {
    data: allItems = [],
    error,
    isLoading,
    refetch,
  } = useGetPokemonListQuery(undefined);

  // Stany lokalne dla wyszukiwania i paginacji
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const handleRefresh = () => {
    refetch();
  };

  // Memoizacja filtrowania i paginacji
  const filteredItems = useMemo(() => {
    return allItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allItems, searchTerm]);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredItems, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
      <div className="flex justify-between items-center mb-4">
        <Search onSearch={setSearchTerm} loading={isLoading} />
        <button
          onClick={handleRefresh}
          disabled={isLoading}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
          title={t('refreshButtonTitle')}
        >
          🔄
        </button>
      </div>

      {isLoading && <Loader />}
      {error && <div className="text-red-500">Wystąpił błąd podczas ładowania danych.</div>}
      {!isLoading && !error && (
        <>
          <CardList
            items={paginatedItems}
          />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </>
      )}
      <Flyout />
    </>
  );
}
