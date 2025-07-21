# React Class Components App

## Table of Contents

- [Task](#-task)
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

## ✅ Task

[React Unit Testing Task](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-unit-testing.md)

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

[https://your-username-class-components.netlify.app](https://your-username-class-components.netlify.app)

---

## 📅 Done / Deadline

**Done**: 13.07.2025  
**Deadline**: 14.07.2025

---

## 🧾 Score: 100 / 100

### ✅ Basic Requirements (100 points)

- [x] ESLint is configured, no lint errors when `lint` is run – **15 points**
- [x] Prettier is configured, `format:fix` command fixes issues – **15 points**
- [x] Husky is configured, linting runs on `pre-commit` – **10 points**
- [x] Page is split into two sections: top (search) and main (results), data is fetched on first load – **20 points**
- [x] Search input triggers fetch with loader, data updates accordingly – **15 points**
- [x] Search term is stored in and retrieved from `localStorage` – **15 points**
- [x] App is wrapped with `ErrorBoundary`, logs error and displays fallback UI – **10 points**

---

## 🧪 Functionality Overview

- App uses **class components only** (no hooks used)
- Search input fetches data from API (`https://pokeapi.co/api/v2/pokemon`)
- Loader shown during API requests
- Local Storage integration (persisted search term)
- ErrorBoundary catches runtime errors, logs them and shows fallback UI
- Error testing button included
- UI divided into modular components:
  - `Search`
  - `CardList`, `Card`
  - `Loader`
  - `ErrorBoundary`

---

## 🧰 Tech Stack

- React (Class Components)
- TypeScript
- Tailwind CSS
- ESLint / Prettier / Husky
- PokeAPI (Pokemon API)
- LocalStorage

---

## 🛠 Branch Name

`class-components`

---

## ❗ Known Limitations

- PokeAPI returns up to 200 Pokemon per request
- Only first 200 Pokemon are displayed as required
- Search filtering is done client-side after fetching all data

---

## 💬 Final Notes

All requirements have been implemented. No hooks or external component libraries were used. Code is clean and follows best practices. The app features a dark theme with orange accents and provides a smooth Pokemon search experience.
