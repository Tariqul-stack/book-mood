import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BookContext } from "../../Context/BookContext";
import { toast } from "react-toastify";

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();

  const { storedBooks, setStoredBooks } = useContext(BookContext);
  const { wishList, setWishList } = useContext(BookContext);

  const book = books.find((book) => book.bookId === Number(bookId));

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-red-500">Book not found</h2>
      </div>
    );
  }

  // Handle Mark as Read
  const handleMarkAsRead = (currentBook) => {
    const isExistBook = storedBooks.find(
      (item) => item.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("The book already exists");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to read list`);
    }

    console.log(currentBook, storedBooks, "Book");
  };

  // Handle Wish List
  const handleWishList = (currentBook) => {
    const isExistInReadList = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInReadList) {
      toast.error("This book is already in read list");
      return;
    }

    const isExistBook = wishList.find(
      (item) => item.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("The book already exists");
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is added to wish list`);
    }

    console.log(currentBook, storedBooks, "Book");
  };

  return (
    <div className="container mx-auto px-4 py-10 lg:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* Left Side */}
        <div className="bg-[#F3F3F3] rounded-3xl p-8 md:p-12 flex items-center justify-center min-h-[520px] shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          <img
            src={book.image}
            alt={book.bookName}
            className="w-60 md:w-75 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
          />
        </div>

        {/* Right Side */}
        <div className="space-y-5">
          <div className="border-b border-gray-200 pb-5">
            <h1 className="text-4xl md:text-5xl font-bold text-[#131313] leading-tight">
              {book.bookName}
            </h1>
            <p className="mt-3 text-2xl text-[#131313B3]">
              By : <span className="font-semibold">{book.author}</span>
            </p>
          </div>

          <div className="border-b border-gray-200 pb-5">
            <p className="text-xl text-[#131313CC] font-medium">
              {book.category}
            </p>
          </div>

          <div className="border-b border-gray-200 pb-5 space-y-5">
            <p className="text-lg text-[#131313B3] leading-9">
              <span className="font-bold text-[#131313]">Review :</span>{" "}
              {book.review}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xl font-bold text-[#131313]">Tag</span>
              {book.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-[#23BE0A]/10 text-[#23BE0A] font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <div className="grid grid-cols-2 gap-y-4 text-lg">
              <p className="text-[#13131399]">Number of Pages:</p>
              <p className="font-bold text-[#131313]">{book.totalPages}</p>

              <p className="text-[#13131399]">Publisher:</p>
              <p className="font-bold text-[#131313]">{book.publisher}</p>

              <p className="text-[#13131399]">Year of Publishing:</p>
              <p className="font-bold text-[#131313]">
                {book.yearOfPublishing}
              </p>

              <p className="text-[#13131399]">Rating:</p>
              <p className="font-bold text-[#131313]">{book.rating}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => handleMarkAsRead(book)}
              className="btn h-14 px-8 rounded-xl border border-[#1313134D] bg-white text-[#131313] text-xl font-semibold hover:bg-gray-100 shadow-none"
            >
              Mark as Read
            </button>

            <button
              onClick={() => handleWishList(book)}
              className="btn h-14 px-8 rounded-xl border-none bg-[#59C6D2] text-white text-xl font-semibold hover:bg-[#46b7c4] shadow-[0_10px_25px_rgba(89,198,210,0.25)]"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
