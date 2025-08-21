'use client';

import { useState, useEffect } from 'react';

function getStorageValue<T>(key: string, defaultValue: T): T {
  // Ta funkcja będzie teraz wywoływana tylko po stronie klienta
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        return JSON.parse(saved) as T;
      } catch (error) {
        console.error('Error parsing JSON from localStorage', error);
      }
    }
  }
  return defaultValue;
}

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(getStorageValue(key, defaultValue));
  }, [key, defaultValue]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
