import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const bookInfo = {
    readList,
    setReadList,
    wishList,
    setWishList,
  };

  return (
    <BookContext.Provider value={bookInfo}>{children}</BookContext.Provider>
  );
};

export default BookProvider;
