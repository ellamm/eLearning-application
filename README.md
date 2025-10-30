# eLearning Application

A modern, interactive learning management system built with React, showcasing frontend development skills, comprehensive testing practices.

🔗 **Live Demo:** [https://mm-elearning.netlify.app/](https://mm-elearning.netlify.app/)

## 🎯 Overview

eLearning Application is a web platform that demonstrates abilities in modern React development, state management, custom hooks and testing strategies. This project simulates a real-world learning management system with course tracking, progress monitoring and dynamic content filtering with mocked data.

**Key Highlights:**

- **Custom React Hooks**: Implements `useDebounce`, `usePagination` and `useComponentData` for reusable logic
- **Comprehensive Testing**: Unit, component and E2E tests with Vitest, React Testing Library and Playwright
- **Performance Optimized**: React Compiler integration, code splitting and optimized bundle sizes
- **Accessibility-First**: ARIA labels, semantic HTML and keyboard navigation support
- **Production-Ready**: CI/CD pipeline with automated testing across multiple browsers and devices

## ✨ Features

- **Smart Search & Filtering**: Real-time search with debouncing for optimal performance
- **Progress Tracking**: Visual indicators (linear and circular) for course completion status
- **Dynamic Pagination**: Load more functionality with state management
- **Multi-Content Support**: Handles courses, learning paths and media items
- **Responsive Design**: Fully optimized for desktop, tablet and mobile viewports
- **Type Badges**: Color-coded badges for quick content type identification
- **Detail Pages**: Comprehensive course information

## 🛠️ Technologies Used

### Frontend

- **React** - Modern React with hooks and Suspense for code splitting
- **React Router** - Client-side routing with lazy loading
- **CSS Modules** - Scoped, maintainable component-level styling
- **Vite** - Lightning-fast build tool
- **Lucide React** - Modern icon library

### Testing

- **Vitest** - Fast unit test runner with Vite integration
- **React Testing Library** - Component testing with user-centric queries
- **@testing-library/user-event** - Realistic user interaction simulation
- **Playwright** - Cross-browser E2E testing (Chrome, Firefox, Safari, Mobile)
- **@vitest/coverage-v8** - Code coverage reporting

### Tools & Deployment

- **Git** - Version control with clean commit history
- **Netlify** - Continuous deployment with production hosting
- **ESLint** - Code quality and consistency enforcement

## 🧪 Testing Strategy

### Unit & Component Tests (Vitest + RTL)

- **Utilities**: `slugify`, `dateFormatter`, `componentTypeUtils`
- **Components**: `Badge`, `SearchBar`, `ProgressIndicator`, `InfoBox`, `ComponentTile`
- **Hooks**: `useDebounce`, `usePagination`, `useComponentData`

**Run tests:**

```bash
npm test                 # Run all unit/component tests
npm run test:coverage    # Generate coverage report
```

### E2E Tests (Playwright)

- **Local Development**: Tests core user workflows with specific data expectations
- **Production Verification**: Tests deployed site for asset loading

**Run E2E tests:**

```bash
npm run test:e2e         # Local development tests
npm run test:e2e:prod    # Production tests (Netlify)
npx playwright show-report  # View test results
```

**Cross-browser Coverage:**

- Desktop: Chrome, Firefox, Safari
- Mobile: Pixel 5, iPhone 12

## 📈 Learning Outcomes

This project demonstrates understandign of:

- **Advanced React Patterns**: Custom hooks, lazy loading, Suspense boundaries and performance optimization
- **State Management**: Complex state handling for search, filtering and pagination without external libraries
- **Testing Best Practices**: Comprehensive test coverage with unit, component and E2E tests
- **Performance Optimization**: Code splitting, vendor chunking, debouncing and React Compiler integration
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation and screen reader support
- **Modern Tooling**: Vite, Vitest, Playwright
- **Clean Code Architecture**: Modular components, custom hooks and maintainable code structure
