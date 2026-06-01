import { Book } from "../types/book";
import { useNavigate } from "react-router-dom";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/books/${book.id}`)}
      className="bg-white rounded-lg shadow hover:shadow-xl transition cursor-pointer overflow-hidden"
    >
      <img
        src={book.imageUrl}
        alt={book.title}
        className="h-72 w-full object-cover"
      />

      <div className="p-4">

        <h3 className="font-semibold text-lg">
          {book.title}
        </h3>

        <p className="text-gray-500">
          {book.author}
        </p>

        <p className="text-blue-600 font-bold mt-2">
          ${book.price}
        </p>

      </div>
    </div>
  );
};

export default BookCard;