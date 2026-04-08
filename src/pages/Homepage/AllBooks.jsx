import React, { use } from "react";
import BookCard from "../../components/UI/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);

  return (
    <div className="my-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2
          className="inline-block px-7 py-2.5 rounded-full text-3xl md:text-3xl font-extrabold text-white 
            bg-linear-to-r from-[#23BE0A] to-[#59C6D2] 
            shadow-[0_8px_25px_rgba(35,190,10,0.3)] 
            relative"
        >
          Books
          {/* subtle glow */}
          <span className="absolute inset-0 rounded-full bg-linear-to-r from-[#23BE0A] to-[#59C6D2] blur-md opacity-20 -z-10"></span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => {
          return <BookCard key={index} book={book} />;
        })}
      </div>
    </div>
  );
};

export default AllBooks;
