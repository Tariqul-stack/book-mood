import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import BookCard from "../UI/BookCard";

const ListedWishList = () => {
  const { wishList } = useContext(BookContext);

  console.log(wishList, "book Context");

  if (wishList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center rounded-2xl">
        <h2 className="font-bold text-3xl">No Wish list data found</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {wishList.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedWishList;
