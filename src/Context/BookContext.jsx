import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  const bookInfo = {
    storedBooks,
    setStoredBooks,
    wishList,
    setWishList,
  };

  return (
    <BookContext.Provider value={bookInfo}>{children}</BookContext.Provider>
  );
};

export default BookProvider;
