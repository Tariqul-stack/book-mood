import React, { useContext } from "react";
import { BookContext } from "../../Context/BookContext";

const Books = () => {
  const { storedBooks, setStoredBooks } = useContext(BookContext);
  console.log(storedBooks, setStoredBooks);

  return (
    <div>
      <h3>Listed Books</h3>
    </div>
  );
};

export default Books;
