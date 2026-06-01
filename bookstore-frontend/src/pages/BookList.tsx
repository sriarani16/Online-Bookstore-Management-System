import { useEffect, useState } from "react";
import { getAllBooks } from "../services/BookService";
import { Book } from "../types/book";
import BookCard from "../components/BookCard";

const BookList = () => {

  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await getAllBooks();
    setBooks(response.data);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      <h1 className="text-4xl font-bold mb-6">
        Online Bookstore
      </h1>

      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-8 border rounded-lg p-3"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredBooks.map(book => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}

      </div>

    </div>
  );
};

export default BookList;