import React from "react";
import { StickyNote } from "lucide-react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`bookDetails/${book.bookId}`}
      key={book.bookId}
      className="bg-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition duration-300"
    >
      {/* Image */}
      <div className="bg-[#F3F3F3] rounded-xl flex items-center justify-center h-56 mb-5">
        <img
          src={book.image}
          alt={book.bookName}
          className="h-48 object-contain"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {book.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-full bg-[#23BE0A]/10 text-[#23BE0A] font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-[#131313] mb-1">{book.bookName}</h2>

      {/* Author */}
      <p className="text-sm text-gray-500 mb-3">By: {book.author}</p>

      {/* Review (short) */}
      <p className="text-sm text-gray-600 line-clamp-3 mb-4">{book.review}</p>

      {/* Bottom info */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <StickyNote className="w-4 h-4 text-[#22be0a92]" />
          {book.totalPages} pages
        </span>

        <span>⭐ {book.rating}</span>
      </div>
    </Link>
  );
};

export default BookCard;
