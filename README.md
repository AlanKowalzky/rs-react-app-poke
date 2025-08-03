# React State Management App

## 🎯 Current Task: State Management and Context API (Task 4)

### Task Description
Implement Redux Toolkit for state management and Context API for theme switching. Add selected items functionality with flyout component and CSV download capability.

### Requirements Analysis - Score: 100/100 ✅

#### ✅ **COMPLETED REQUIREMENTS:**

1. **State management with Redux Toolkit** - **35/35**
   - ✅ Redux Toolkit integrated and configured
   - ✅ Store setup with proper reducers
   - ✅ Selected items managed through Redux state

2. **Selected Items Management** - **25/25**
   - ✅ Checkboxes on each Pokemon item
   - ✅ Selected state persists across page navigation
   - ✅ Items can be selected/unselected
   - ✅ State maintained in Redux store

3. **Flyout Component** - **15/15**
   - ✅ Appears when items are selected
   - ✅ Shows count of selected items
   - ✅ Hides when no items selected
   - ✅ Fixed positioning at bottom-right

4. **Download and Unselect Functionality** - **10/10**
   - ✅ "Unselect all" button clears selection
   - ✅ "Download" button creates CSV file
   - ✅ CSV filename includes item count
   - ✅ Flyout disappears after unselect all

5. **Theme Context API** - **15/15**
   - ✅ Theme switcher component implemented
   - ✅ Light/Dark theme options available
   - ✅ Theme affects entire application
   - ✅ Theme state managed via Context API
   - ✅ Theme preference persisted in localStorage

#### 🚫 **NO PENALTIES:**
- TypeScript is used ✅
- No component libraries (only Tailwind CSS) ✅
- No direct DOM manipulations ✅
- Hooks are required for this task ✅

**Final Score: 100/100** 🎉

---

## Table of Contents

- [Current Task](#-current-task-routing-and-hooks-task-3)
- [Previous Tasks](#-previous-tasks)
- [Task Links](#-task-links)
- [Screenshot](#-screenshot)
- [Deployment](#-deployment)
- [Done / Deadline](#-done--deadline)
- [Score](#-score-100--100)
- [Testing Requirements](#testing-requirements)
- [Functionality Overview](#-functionality-overview)
- [Tech Stack](#-tech-stack)
- [Branch Name](#-branch-name)
- [Known Limitations](#-known-limitations)
- [Final Notes](#-final-notes)

## 📋 Previous Tasks

### Task 1: Class Components (Completed)
- App uses **class components only** (no hooks used)
- Search input fetches data from API
- Local Storage integration
- ErrorBoundary implementation

### Task 2: Unit Testing (Completed)
- Jest configured with React Testing Library
- Test coverage reporting enabled (min. 80% statements)
- All main components have test files
- Husky runs tests on pre-push

### Task 3: Routing and Hooks (Completed)
- App converted to **functional components with hooks**
- React Router implemented for navigation
- Custom `useLocalStorage` hook for state persistence
- Pagination with URL synchronization
- Master-Detail view with routing
- About page and 404 handling

## 🔗 Task Links

- [Task 1: React Class Components](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-class-components.md)
- [Task 2: React Unit Testing](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-unit-testing.md)
- [Task 3: React Routing and Hooks](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-routing-hooks.md)
- [Task 4: State Management and Context API](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-state-management.md)

---

## 🧪 Testing Requirements

- Jest (or Vitest) is configured with React Testing Library (RTL)
- Test coverage reporting is enabled (min. 80% statements, min. 50% for branches, functions, lines)
- All main components have dedicated test files (`*.test.tsx`)
- Tests cover rendering, user interactions, API mocking, error handling, and integration
- Husky runs tests on pre-push
- No implementation changes in components for testing
- All tests must pass and coverage thresholds must be met

---

## 📸 Screenshot

![Screenshot](https://your-screenshot-url.com) <!-- Replace with actual screenshot -->

---

## 🚀 Deployment

[https://your-username-hooks-routing.netlify.app](https://your-username-hooks-routing.netlify.app)

---

## 📅 Done / Deadline

**Done**: 13.07.2025  
**Deadline**: 14.07.2025

---

## 🧾 Score: 100 / 100

### ✅ Task 4 Requirements (100 points)

- [x] State management is properly implemented with Redux Toolkit – **35 points**
- [x] Selected items are managed through the state store, persistent across pages – **25 points**
- [x] Flyout component shows/hides based on selected items, displays count – **15 points**
- [x] "Unselect all" and "Download" buttons work according to requirements – **10 points**
- [x] User can switch application theme using Context API – **15 points**

### ✅ No Penalties Applied

- [x] TypeScript is used throughout the application
- [x] No usage of `any` type
- [x] No usage of `ts-ignore`
- [x] No code smells or commented code
- [x] Test coverage above 80% (88.42%)
- [x] No direct DOM manipulations
- [x] No external component libraries used

---

## 🧪 Functionality Overview

- **Redux Toolkit** for state management
- **Context API** for theme switching (Light/Dark)
- **Selected Items Management** with persistent state
- **Flyout Component** for bulk actions
- **CSV Download** functionality
- React Router for navigation
- Custom hooks for state persistence
- Pagination with URL synchronization
- Master-Detail view with routing
- Search functionality with API integration
- Comprehensive test coverage (88.42%)
- UI components:
  - `Search` (with custom hook)
  - `CardList`, `Card` (with selection checkboxes)
  - `Details` (with routing)
  - `Pagination`
  - `Flyout` (Redux-powered)
  - `ThemeSwitcher` (Context API)
  - `About`, `NotFound`
  - `Loader`, `ErrorBoundary`

---

## 🧰 Tech Stack

- React (Functional Components + Hooks)
- **Redux Toolkit** (State Management)
- **Context API** (Theme Management)
- React Router (Navigation)
- TypeScript (Type Safety)
- Tailwind CSS (Styling)
- Jest + React Testing Library (Testing)
- ESLint / Prettier / Husky (Code Quality)
- PokeAPI (Pokemon API)
- LocalStorage (Persistence)

---

## 🛠 Branch Name

`app-state-management`

---

## ❗ Known Limitations

- PokeAPI returns up to 200 Pokemon per request
- Only first 200 Pokemon are displayed as required
- Search filtering is done client-side after fetching all data
- ErrorBoundary remains as class component (as required)

---

## 💬 Final Notes

All Task 4 requirements have been implemented successfully. Redux Toolkit integrated for state management, Context API added for theme switching, selected items functionality with flyout component, and CSV download capability. The app maintains excellent test coverage (88.42%) and follows all React best practices. Features include persistent item selection, theme switching, and comprehensive state management.

## 🛠️ Technologies

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![Testing Library](https://img.shields.io/badge/Testing_Library-E33337?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)](https://prettier.io/)
[![Husky](https://img.shields.io/badge/Husky-DD0700?style=for-the-badge&logo=git&logoColor=white)](https://typicode.github.io/husky/)
