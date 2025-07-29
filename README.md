# React Hooks and Routing App

## 🎯 Current Task: Routing and Hooks (Task 3)

### Task Description
Refactor class components to functional components with hooks and implement routing functionality. Add pagination, detailed views, and URL-based navigation.

### Requirements Analysis - Score: 100/100 ✅

#### ✅ **COMPLETED REQUIREMENTS:**

1. **Custom hook to restore search query from LS** - **20/20**
   - ✅ Hook `useLocalStorage` implemented and used in Search.tsx

2. **Pagination is present in both URL and on the page** - **20/20**
   - ✅ Pagination in URL (`?page=2`)
   - ✅ Pagination component displayed on page

3. **Upon clicking, open details panel on the right side** - **5/5**
   - ✅ Details opens on right side in `<aside>`

4. **Use router outlet, left side continues displaying results** - **10/10**
   - ✅ Uses `<Outlet />` in App.tsx
   - ✅ Left side maintains results list

5. **Additional API call, display loader, update URL** - **10/10**
   - ✅ Details.tsx performs additional API call
   - ✅ Displays loader during loading
   - ✅ URL updated (`/:detailsId`)

6. **Details panel closes on close button or main panel click** - **10/10**
   - ✅ Close button works
   - ✅ Main panel click closes details

7. **About page with author info and RS School link** - **5/5**
   - ✅ About.tsx implemented
   - ✅ RS School link present

8. **404 is implemented** - **5/5**
   - ✅ NotFound.tsx implemented
   - ✅ Routing handles non-existing paths

9. **New tests for new functionality** - **15/15**
   - ✅ Tests for Details, About, Search, CardList
   - ✅ Cover new functionality

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

## 🔗 Task Links

- [Task 1: React Class Components](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-class-components.md)
- [Task 2: React Unit Testing](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-unit-testing.md)
- [Task 3: React Routing and Hooks](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-routing-hooks.md)

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

### ✅ Task 3 Requirements (100 points)

- [x] Custom hook to restore search query from LS – **20 points**
- [x] Pagination is present in both URL and on the page – **20 points**
- [x] Upon clicking, open details panel on the right side of the page – **5 points**
- [x] Use router outlet, left side of the page should continue displaying the list of results – **10 points**
- [x] Initiate an additional API call, display a loader, and update the URL – **10 points**
- [x] Details panel should be closed either on the "close" button click or on the main panel click – **10 points**
- [x] About page is implemented with author information and a link to the RS School React course – **5 points**
- [x] 404 is implemented – **5 points**
- [x] New tests are added for the new functionality – **15 points**

---

## 🧪 Functionality Overview

- App converted to **functional components with hooks**
- React Router implemented for navigation
- Custom `useLocalStorage` hook for state persistence
- Pagination with URL synchronization (`?page=2`)
- Master-Detail view with routing (`/:detailsId`)
- Search input fetches data from API (`https://pokeapi.co/api/v2/pokemon`)
- Loader shown during API requests
- ErrorBoundary catches runtime errors (kept as class component)
- UI components:
  - `Search` (with custom hook)
  - `CardList`, `Card`
  - `Details` (with routing)
  - `Pagination`
  - `About`, `NotFound`
  - `Loader`, `ErrorBoundary`

---

## 🧰 Tech Stack

- React (Functional Components + Hooks)
- React Router
- TypeScript
- Tailwind CSS
- ESLint / Prettier / Husky
- PokeAPI (Pokemon API)
- LocalStorage (via custom hook)

---

## 🛠 Branch Name

`hooks-and-routing`

---

## ❗ Known Limitations

- PokeAPI returns up to 200 Pokemon per request
- Only first 200 Pokemon are displayed as required
- Search filtering is done client-side after fetching all data
- ErrorBoundary remains as class component (as required)

---

## 💬 Final Notes

All Task 3 requirements have been implemented successfully. Components converted to functional with hooks, React Router added for navigation, custom hooks created, and comprehensive testing maintained. The app features a dark theme with orange accents and provides smooth Pokemon search with routing capabilities.

## 🛠️ Technologies

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![Testing Library](https://img.shields.io/badge/Testing_Library-E33337?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)](https://prettier.io/)
[![Husky](https://img.shields.io/badge/Husky-DD0700?style=for-the-badge&logo=git&logoColor=white)](https://typicode.github.io/husky/)
