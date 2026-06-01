import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center mt-20">

      <h1 className="text-5xl font-bold">
        Welcome to BookStore 📚
      </h1>

      <p className="text-gray-600 mt-4 text-lg">
        Discover, read, and manage your favorite books
      </p>

      <Link
        to="/books"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded"
      >
        Browse Books
      </Link>

    </div>
  );
};

export default Home;