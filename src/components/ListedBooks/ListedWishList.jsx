import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import BookCard from "../UI/BookCard";

const ListedWishList = ({ sortingType }) => {
  const { wishList } = useContext(BookContext);

  console.log(wishList, "book Context");

  // sorting logic
  const filteredWishList = [...wishList];

  if (sortingType === "pages") {
    filteredWishList.sort((a, b) => a.totalPages - b.totalPages);
  } else if (sortingType === "rating") {
    filteredWishList.sort((a, b) => a.rating - b.rating);
  }

  if (filteredWishList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center rounded-2xl">
        <h2 className="font-bold text-3xl">No Wish list data found</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filteredWishList.map((book) => (
        <BookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default ListedWishList;
