# 📚 Book Mood

**Book Mood** is a modern React-based web application that allows users to explore books, manage reading preferences, and organize them into personalized lists such as **Read List** and **Wishlist**.

This project focuses on building a clean UI/UX while applying core React concepts like **state management, context API, routing, and local storage persistence**.

---

## 🚀 Features

- 📖 **Book Listing & Details**
  - Browse a collection of books with detailed information
  - View author, category, rating, total pages, and reviews

- 🔍 **Dynamic Book Details Page**
  - Individual book pages with full information
  - Clean and responsive UI design

- ✅ **Read List Management**
  - Mark books as read
  - Prevent duplicate entries
  - Instant feedback using toast notifications

- ❤️ **Wishlist System**
  - Add books to wishlist
  - Prevent adding books already in the read list
  - Duplicate validation with user-friendly alerts

- 🔄 **Sorting Functionality**
  - Sort books by:
    - 📄 Total Pages
    - ⭐ Rating
  - Available for both **Read List** and **Wishlist**

- 💾 **Local Storage Integration**
  - Data persists even after page reload
  - Read list and wishlist stored in browser storage

- 🔔 **Toast Notifications**
  - Real-time success & error feedback
  - Enhanced user experience using React Toastify

- 🎨 **Modern UI/UX**
  - Built with Tailwind CSS & DaisyUI
  - Clean, responsive, and user-friendly interface

---

## 🛠️ Tech Stack

- ⚛️ React
- ⚡ Vite
- 🎨 Tailwind CSS + DaisyUI
- 🧠 JavaScript (ES6+)
- 🔗 React Router
- 🔔 React Toastify
- 💾 Local Storage

---

## 🌐 Live Demo

🔗 https://book-mood.netlify.app

---

## 📁 Project Structure

```bash
src/
 ├── components/
 │    ├── homepage/
 │    │    └── Banner.jsx
 │    ├── ListedBooks/
 │    │    ├── ListedReadList.jsx
 │    │    └── ListedWishList.jsx
 │    ├── shared/NavBar/
 │    │    └── NavBar.jsx
 │    └── UI/
 │         └── BookCard.jsx
 │
 ├── Context/
 │    └── BookContext.jsx
 │
 ├── layout/
 │    └── MainLayout.jsx
 │
 ├── pages/
 │    ├── Homepage/
 │    │    ├── Homepage.jsx
 │    │    └── AllBooks.jsx
 │    ├── Books/
 │    │    └── Books.jsx
 │    ├── BookDetails/
 │    │    └── BookDetails.jsx
 │    └── ErrorPage/
 │         └── ErrorPage.jsx
 │
 ├── routes/
 │    └── Routes.jsx
 │
 ├── Utils/
 │    └── LocalDB.js
 │
 └── main.jsx

---

```
## ▶️ Run Locally

-bash
npm install
npm run dev

---

## 🎯 Purpose

This project is part of my journey to become a Full Stack Developer.
This project helped me strengthen my understanding of:

- React fundamentals
- Component-based architecture
- State management & Context API
- Routing and dynamic pages
- Real-world feature implementation

---

## 👨‍💻 Author

Tariqul Islam

📧 tariqul.dev0@gmail.com

🔗 https://github.com/Tariqul-stack