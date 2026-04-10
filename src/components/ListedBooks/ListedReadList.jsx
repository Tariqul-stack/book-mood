import React, { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import BookCard from "../UI/BookCard";

const ListedReadList = ({ sortingType }) => {
  const { readList } = useContext(BookContext);

  const filteredReadList = [...readList];

  if (sortingType === "pages") {
    filteredReadList.sort((a, b) => a.totalPages - b.totalPages);
  } else if (sortingType === "rating") {
    filteredReadList.sort((a, b) => a.rating - b.rating);
  }

  if (filteredReadList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center rounded-2xl">
        <h2 className="font-bold text-3xl">No Read list data found</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filteredReadList.map((book) => (
        <BookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default ListedReadList;
