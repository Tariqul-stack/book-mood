import React, { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import BookCard from "../UI/BookCard";

const ListedReadList = () => {
  const { readList, wishList } = useContext(BookContext);

  console.log(readList, wishList, "book Context");

  if (readList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center rounded-2xl">
        <h2 className="font-bold text-3xl">No Read list data found</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {readList.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedReadList;
