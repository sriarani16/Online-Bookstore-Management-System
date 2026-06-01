import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white px-6 py-4 flex justify-between items-center">
      
      <h1 className="text-xl font-bold">
        📚 BookStore
      </h1>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/books" className="hover:text-gray-300">Books</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/add-book" className="btn"> Add Book</Link>
      </div>

    </nav>
  );
};

export default Navbar;