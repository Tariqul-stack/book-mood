# Book Mood

Book Mood is a React-based book discovery app where users can browse books, explore book details, manage a read list and wishlist, and view a styled Pages to Read chart.

The project focuses on practical React concepts like routing, context-based state management, local storage persistence, interactive UI states, and reusable components.

## Features

- Browse all available books from the homepage
- Open a dynamic book details page for each book
- Add books to the read list
- Add books to the wishlist with validation
- Prevent duplicate entries in lists
- Persist read list and wishlist data with local storage
- Sort listed books by total pages or rating
- View a static Recharts-based Pages to Read chart
- Get toast feedback for important user actions
- Use a responsive UI built with Tailwind CSS and DaisyUI

## Tech Stack

- React
- Vite
- React Router
- Context API
- Tailwind CSS
- DaisyUI
- Recharts
- React Toastify
- Lucide React
- Local Storage

## Live Demo

[book-mood.netlify.app](https://book-mood.netlify.app)

## Project Structure

```text
src/
├── components/
│   ├── homepage/
│   │   └── Banner.jsx
│   ├── ListedBooks/
│   │   ├── ListedReadList.jsx
│   │   └── ListedWishList.jsx
│   ├── shared/NavBar/
│   │   └── NavBar.jsx
│   └── UI/
│       └── BookCard.jsx
├── Context/
│   └── BookContext.jsx
├── layout/
│   └── MainLayout.jsx
├── pages/
│   ├── BookDetails/
│   │   └── BookDetails.jsx
│   ├── Books/
│   │   └── Books.jsx
│   ├── ErrorPage/
│   │   └── ErrorPage.jsx
│   ├── Homepage/
│   │   ├── AllBooks.jsx
│   │   └── Homepage.jsx
│   └── PagesToRead/
│       └── PagesToRead.jsx
├── routes/
│   └── Routes.jsx
├── Utils/
│   └── LocalDB.js
└── main.jsx
```

## Run Locally

```bash
npm install
npm run dev
```

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Purpose

This project is part of my learning journey as a developer. It helped me practice:

- React fundamentals
- Component-based architecture
- Context API state handling
- Dynamic routing
- Local storage persistence
- Feature-focused UI implementation

## Author

Tariqul Islam

- Email: tariqul.dev0@gmail.com
- GitHub: [Tariqul-stack](https://github.com/Tariqul-stack)
