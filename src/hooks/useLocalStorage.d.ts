import type { Dispatch, SetStateAction } from 'react';
export declare const useLocalStorage: <T>(
  key: string,
  defaultValue: T
) => [T, Dispatch<SetStateAction<T>>];
