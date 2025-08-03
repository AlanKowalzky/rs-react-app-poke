import React from 'react';
import { screen } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import type { RootState } from './app/store';
export { screen };
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: ReturnType<typeof configureStore>;
}
export declare function renderWithProviders(
  ui: React.ReactElement,
  { preloadedState, store, ...renderOptions }?: ExtendedRenderOptions
): {
  container: HTMLElement;
  baseElement: HTMLElement;
  debug: (
    baseElement?:
      | import('react-dom/client').Container
      | (Document | Element)
      | Array<import('react-dom/client').Container | (Document | Element)>
      | undefined,
    maxLength?: number | undefined,
    options?: import('pretty-format').OptionsReceived | undefined
  ) => void;
  rerender: (ui: React.ReactNode) => void;
  unmount: () => void;
  asFragment: () => DocumentFragment;
  getByLabelText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').SelectorMatcherOptions
  ) => HTMLElement;
  getAllByLabelText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').SelectorMatcherOptions
  ) => HTMLElement[];
  queryByLabelText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').SelectorMatcherOptions
  ) => HTMLElement;
  queryAllByLabelText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').SelectorMatcherOptions
  ) => HTMLElement[];
  findByLabelText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').SelectorMatcherOptions,
    waitForElementOptions?: import('@testing-library/react').waitForOptions
  ) => Promise<HTMLElement>;
  findAllByLabelText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').SelectorMatcherOptions,
    waitForElementOptions?: import('@testing-library/react').waitForOptions
  ) => Promise<HTMLElement[]>;
  getByPlaceholderText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement;
  getAllByPlaceholderText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement[];
  queryByPlaceholderText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement;
  queryAllByPlaceholderText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement[];
  findByPlaceholderText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions,
    waitForElementOptions?: import('@testing-library/react').waitForOptions
  ) => Promise<HTMLElement>;
  findAllByPlaceholderText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions,
    waitForElementOptions?: import('@testing-library/react').waitForOptions
  ) => Promise<HTMLElement[]>;
  getByText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').SelectorMatcherOptions
  ) => HTMLElement;
  getAllByText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').SelectorMatcherOptions
  ) => HTMLElement[];
  queryByText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').SelectorMatcherOptions
  ) => HTMLElement;
  queryAllByText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').SelectorMatcherOptions
  ) => HTMLElement[];
  findByText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').SelectorMatcherOptions,
    waitForElementOptions?: import('@testing-library/react').waitForOptions
  ) => Promise<HTMLElement>;
  findAllByText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').SelectorMatcherOptions,
    waitForElementOptions?: import('@testing-library/react').waitForOptions
  ) => Promise<HTMLElement[]>;
  getByAltText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement;
  getAllByAltText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement[];
  queryByAltText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement;
  queryAllByAltText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement[];
  findByAltText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions,
    waitForElementOptions?: import('@testing-library/react').waitForOptions
  ) => Promise<HTMLElement>;
  findAllByAltText: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions,
    waitForElementOptions?: import('@testing-library/react').waitForOptions
  ) => Promise<HTMLElement[]>;
  getByTitle: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement;
  getAllByTitle: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement[];
  queryByTitle: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement;
  queryAllByTitle: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement[];
  findByTitle: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions,
    waitForElementOptions?: import('@testing-library/react').waitForOptions
  ) => Promise<HTMLElement>;
  findAllByTitle: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions,
    waitForElementOptions?: import('@testing-library/react').waitForOptions
  ) => Promise<HTMLElement[]>;
  getByDisplayValue: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement;
  getAllByDisplayValue: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement[];
  queryByDisplayValue: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement;
  queryAllByDisplayValue: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement[];
  findByDisplayValue: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions,
    waitForElementOptions?: import('@testing-library/react').waitForOptions
  ) => Promise<HTMLElement>;
  findAllByDisplayValue: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions,
    waitForElementOptions?: import('@testing-library/react').waitForOptions
  ) => Promise<HTMLElement[]>;
  getByRole: (
    role: import('@testing-library/react').ByRoleMatcher,
    options?: import('@testing-library/react').ByRoleOptions
  ) => HTMLElement;
  getAllByRole: (
    role: import('@testing-library/react').ByRoleMatcher,
    options?: import('@testing-library/react').ByRoleOptions
  ) => HTMLElement[];
  queryByRole: (
    role: import('@testing-library/react').ByRoleMatcher,
    options?: import('@testing-library/react').ByRoleOptions
  ) => HTMLElement;
  queryAllByRole: (
    role: import('@testing-library/react').ByRoleMatcher,
    options?: import('@testing-library/react').ByRoleOptions
  ) => HTMLElement[];
  findByRole: (
    role: import('@testing-library/react').ByRoleMatcher,
    options?: import('@testing-library/react').ByRoleOptions,
    waitForElementOptions?: import('@testing-library/react').waitForOptions
  ) => Promise<HTMLElement>;
  findAllByRole: (
    role: import('@testing-library/react').ByRoleMatcher,
    options?: import('@testing-library/react').ByRoleOptions,
    waitForElementOptions?: import('@testing-library/react').waitForOptions
  ) => Promise<HTMLElement[]>;
  getByTestId: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement;
  getAllByTestId: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement[];
  queryByTestId: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement;
  queryAllByTestId: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions
  ) => HTMLElement[];
  findByTestId: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions,
    waitForElementOptions?: import('@testing-library/react').waitForOptions
  ) => Promise<HTMLElement>;
  findAllByTestId: (
    id: import('@testing-library/react').Matcher,
    options?: import('@testing-library/react').MatcherOptions,
    waitForElementOptions?: import('@testing-library/react').waitForOptions
  ) => Promise<HTMLElement[]>;
  store: import('redux').Store<unknown, import('redux').Action, unknown>;
};
