import React, { createContext, useEffect, useState } from "react";
import {
  getAllReadListFromLocalDB,
  getAllWishListFromLocalDB,
} from "../Utils/LocalDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const getReadListFromLocalDB = getAllReadListFromLocalDB();
    const getWishListFromLocalDB = getAllWishListFromLocalDB();

    setReadList(getReadListFromLocalDB);
    setWishList(getWishListFromLocalDB);
  }, []);

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
